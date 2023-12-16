-------------> requires start <--------------
-- If LuaRocks is installed, make sure that packages installed through it are
-- found (e.g. lgi). If LuaRocks is not installed, do nothing.

pcall(require, "luarocks.loader")
-- Standard awesome library
local gears = require("gears")
require("awful.autofocus")
-- Widget and layout library
local wibox = require("wibox")
-- Theme handling library
local beautiful = require("beautiful")
-- Notification library
local naughty = require("naughty")
local menubar = require("menubar")
local hotkeys_popup = require("awful.hotkeys_popup")
-- Enable hotkeys help widget for VIM and other apps
-- when client with a matching name is opened:
require("awful.hotkeys_popup.keys")
-- Load Debian menu entries
local debian = require("debian.menu")
local has_fdo, freedesktop = pcall(require, "freedesktop")
local awful = require("awful")

-------------> till here required end <--------------

-------------> functions start <--------------
microphone_widget = wibox.widget.textbox()
microphone_widget.text = " 🔊 "
microphone_timer = timer({ timeout = 0.2 })  -- Update every 0.2 seconds, you can adjust this as needed
microphone_timer:connect_signal("timeout", function()
    local status = io.popen("pactl list | sed -n '/^Source/,/^$/p' | grep Mute | sed -n '2p'"):read("*all")
    local microphone_on = string.match(status, "no")
    if microphone_on then
        microphone_widget.text = " 🔊 "
    else
        microphone_widget.text = " 🚫 "
    end
end)

function move_to_tag_on_screen(c, tag, screen)
	local t = screen.tags[tag]
	if t then
		c:move_to_tag(t)
		t:view_only()
		client.focus = c
		c:raise()
	end
end

function open_or_move_to_tag(app_class, tag_index)
	local screen = awful.screen.focused()
	local app_client = nil

	-- Check if the application is already open on any tag
	for _, c in ipairs(client.get()) do
		if awful.rules.match(c, { class = app_class }) then
			app_client = c
			break
		end
	end

	-- If the application is not open, spawn a new instance on the specified tag
	if not app_client then
		local tag = screen.tags[tag_index]
		if tag then
			tag:view_only()
			awful.spawn(app_class:lower()) -- Use lower() to ensure consistency in application class names
		end
	else
		-- Check if the application is on the current monitor, if not, move it to the current monitor
		if app_client.screen ~= screen then
			awful.client.movetoscreen(app_client, screen)
		end

		-- Move the application to the specified tag and focus it
		awful.client.movetotag(screen.tags[tag_index], app_client)
		awful.tag.viewonly(screen.tags[tag_index])
		client.focus = app_client
		app_client:raise()
	end
end
-------------> Functions end <--------------

-- {{{ Error handling
-- Check if awesome encountered an error during startup and fell back to
-- another config (This code will only ever execute for the fallback config)
if awesome.startup_errors then
	naughty.notify({
		preset = naughty.config.presets.critical,
		title = "Oops, there were errors during startup!",
		text = awesome.startup_errors,
	})
end

-- Handle runtime errors after startup
do
	local in_error = false
	awesome.connect_signal("debug::error", function(err)
		-- Make sure we don't go into an endless error loop
		if in_error then
			return
		end
		in_error = true

		naughty.notify({
			preset = naughty.config.presets.critical,
			title = "Oops, an error happened!",
			text = tostring(err),
		})
		in_error = false
	end)
end
-- }}}

-- {{{ Variable definitions
-- Themes define colours, icons, font and wallpapers.
-- beautiful.init(gears.filesystem.get_themes_dir() .. "theme/default/theme")
-- beautiful.init(gears.filesystem.get_themes_dir() .. "default/theme.lua")

-- Define a custom color palette for night mode
beautiful.init("/usr/share/awesome/themes/default/theme.lua") -- You might have a different theme path
-- Set the gap width (in pixels)
beautiful.useless_gap = 7

-- beautiful.init("~/.config/awesome/theme-dark.lua")

-- This is used later as the default terminal and editor to run.
-- terminal = "x-terminal-emulator"
terminal = "xfce4-terminal"

editor = os.getenv("EDITOR") or "editor"
editor_cmd = terminal .. " -e " .. editor

-- Default modkey.
-- Usually, Mod4 is the key with a logo between Control and Alt.
-- If you do not like this or do not have such a key,
-- I suggest you to remap Mod4 to another key using xmodmap or other tools.
-- However, you can use another modifier like Mod1, but it may interact with others.
modkey = "Mod4"

-- Table of layouts to cover with awful.layout.inc, order matters.
awful.layout.layouts = {
	awful.layout.suit.tile,
	awful.layout.suit.floating,
	awful.layout.suit.tile.left,
	awful.layout.suit.tile.bottom,
	awful.layout.suit.tile.top,
	awful.layout.suit.fair,
	awful.layout.suit.fair.horizontal,
	awful.layout.suit.spiral,
	awful.layout.suit.spiral.dwindle,
	awful.layout.suit.max,
	awful.layout.suit.max.fullscreen,
	awful.layout.suit.magnifier,
	awful.layout.suit.corner.nw,
	-- awful.layout.suit.corner.ne,
	-- awful.layout.suit.corner.sw,
	-- awful.layout.suit.corner.se,
}
-- }}}

-- {{{ Menu
-- Create a launcher widget and a main menu
myawesomemenu = {
	{
		"hotkeys",
		function()
			hotkeys_popup.show_help(nil, awful.screen.focused())
		end,
	},
	{ "manual", terminal .. " -e man awesome" },
	{ "edit config", editor_cmd .. " " .. awesome.conffile },
	{ "restart", awesome.restart },
	{
		"quit",
		function()
			awesome.quit()
		end,
	},
}

local menu_awesome = { "awesome", myawesomemenu, beautiful.awesome_icon }
local menu_terminal = { "open terminal", terminal }

if has_fdo then
	mymainmenu = freedesktop.menu.build({
		before = { menu_awesome },
		after = { menu_terminal },
	})
else
	mymainmenu = awful.menu({
		items = {
			menu_awesome,
			{ "Debian", debian.menu.Debian_menu.Debian },
			menu_terminal,
		},
	})
end

mylauncher = awful.widget.launcher({ image = beautiful.awesome_icon, menu = mymainmenu })

-- Menubar configuration
menubar.utils.terminal = terminal -- Set the terminal for applications that require it

-- Keyboard map indicator and switcher
mykeyboardlayout = awful.widget.keyboardlayout()
-- Update the seconds every second
mytimer = timer({ timeout = 1 })
mytimer:connect_signal("timeout", function()
    mytextclock.text = os.date("%H:%M:%S", os.time())
end)
mytimer:start()

-- microphone logo
microphone_timer:start()

-- Create a wibox for each screen and add it
local taglist_buttons = gears.table.join(
	awful.button({}, 1, function(t)
		t:view_only()
	end),
	awful.button({ modkey }, 1, function(t)
		if client.focus then
			client.focus:move_to_tag(t)
		end
	end),
	awful.button({}, 3, awful.tag.viewtoggle),
	awful.button({ modkey }, 3, function(t)
		if client.focus then
			client.focus:toggle_tag(t)
		end
	end),
	awful.button({}, 4, function(t)
		awful.tag.viewnext(t.screen)
	end),
	awful.button({}, 5, function(t)
		awful.tag.viewprev(t.screen)
	end)
)

local tasklist_buttons = gears.table.join(
	awful.button({}, 1, function(c)
		if c == client.focus then
			c.minimized = true
		else
			c:emit_signal("request::activate", "tasklist", { raise = true })
		end
	end),
	awful.button({}, 3, function()
		awful.menu.client_list({ theme = { width = 250 } })
	end),
	awful.button({}, 4, function()
		awful.client.focus.byidx(1)
	end),
	awful.button({}, 5, function()
		awful.client.focus.byidx(-1)
	end)
)

-- local function set_wallpaper(s)
-- 	-- Wallpaper
-- 	if beautiful.wallpaper then
-- 		local wallpaper = beautiful.wallpaper
-- 		-- If wallpaper is a function, call it with the screen
-- 		if type(wallpaper) == "function" then
-- 			wallpaper = wallpaper(s)
-- 		end
-- 		gears.wallpaper.maximized(wallpaper, s, true)
-- 	end
-- end

-- Re-set wallpaper when a screen's geometry changes (e.g. different resolution)
-- screen.connect_signal("property::geometry", set_wallpaper)
awful.screen.connect_for_each_screen(function(s)
	-- Each screen has its own tag table.
	-- awful.tag({ "1", "2", "3", "4", "5", "6", "7", "8", "9" }, s, awful.layout.layouts[1])
	local names = { "Sahith", "2", "3", "4", "5", "6", "7", "Code", "Browser" }
	local l = awful.layout.suit

	local layouts = { l.tile, l.tile, l.tile, l.tile, l.tile, l.tile, l.tile, l.tile, l.tile }
	awful.tag(names, s, layouts)

	-- Create a promptbox for each screen
	s.mypromptbox = awful.widget.prompt()
	-- Create an imagebox widget which will contain an icon indicating which layout we're using.
	-- We need one layoutbox per screen.
	s.mylayoutbox = awful.widget.layoutbox(s)
	s.mylayoutbox:buttons(gears.table.join(
		awful.button({}, 1, function()
			awful.layout.inc(1)
		end),
		awful.button({}, 3, function()
			awful.layout.inc(-1)
		end),
		awful.button({}, 4, function()
			awful.layout.inc(1)
		end),
		awful.button({}, 5, function()
			awful.layout.inc(-1)
		end)
	))
	-- Create a taglist widget
	s.mytaglist = awful.widget.taglist({
		screen = s,
		filter = awful.widget.taglist.filter.all,
		buttons = taglist_buttons,
	})

	-- Create a tasklist widget
	s.mytasklist = awful.widget.tasklist({
		screen = s,
		filter = awful.widget.tasklist.filter.currenttags,
		buttons = tasklist_buttons,
	})

	local mytextclock = wibox.widget.textclock("%H:%M:%S" , 1)

	-- Update the seconds every second
	mytimer = timer({ timeout = 1 })
	mytimer:connect_signal("timeout", function()
		mytextclock.text = os.date("%H:%M:%S", os.time())
	end)
	mytimer:start()
	
	-- Create the wibox
	s.mywibox = awful.wibar({ position = "top", screen = s })

	-- Add widgets to the wibox
	s.mywibox:setup({
		layout = wibox.layout.align.horizontal,
		{ -- Left widgets
			layout = wibox.layout.fixed.horizontal,
			-- mylauncher,
			s.mytaglist,
			s.mypromptbox,
		},
		s.mytasklist, -- Middle widget
		{ -- Right widgets
			layout = wibox.layout.fixed.horizontal,
			mykeyboardlayout,
			wibox.widget.systray(),
			microphone_widget,
			
			mytextclock,
			s.mylayoutbox,
		},
	})
end)
-- }}}

-- {{{ Mouse bindings
root.buttons(gears.table.join(
	awful.button({}, 3, function()
		mymainmenu:toggle()
	end),
	awful.button({}, 4, awful.tag.viewnext),
	awful.button({}, 5, awful.tag.viewprev)
))
-- }}}

-- {{{ Key bindings
globalkeys = gears.table.join(
	awful.key({ "Mod1", "Shift" }, ";", function()
		awful.spawn("shutdown now")
	end, { description = "Shutdown", group = "awesome" }),
	awful.key({ modkey }, "s", hotkeys_popup.show_help, { description = "show help", group = "awesome" }),
	awful.key({ modkey }, "Left", awful.tag.viewprev, { description = "view previous", group = "tag" }),
	awful.key({ modkey }, "Right", awful.tag.viewnext, { description = "view next", group = "tag" }),
	awful.key({ modkey }, "Escape", awful.tag.history.restore, { description = "go back", group = "tag" }),
	-- by me (start)
	-- sound (set by me)
	awful.key({ "Mod1" }, "r", function()
		-- Toggle microphone mute command
		awful.spawn("amixer -D pulse sset Capture toggle")
	end, { description = "Toggle Microphone Mute", group = "media" }),

	awful.key({}, "XF86AudioMute", function()
		-- Toggle sound command with amixer
		awful.spawn("amixer -D pulse set Master 1+ toggle")
	end, { description = "Toggle Sound", group = "media" }),

	awful.key({}, "XF86AudioRaiseVolume", function()
		awful.util.spawn("amixer -D pulse sset Master 5%+", false)
	end),
	awful.key({}, "XF86AudioLowerVolume", function()
		awful.util.spawn("amixer -D pulse sset Master 5%-", false)
	end),

	awful.key({ "Mod1" }, "space", function()
		awful.spawn("flameshot gui")
	end, { description = "Take a cropped screenshot", group = "screen" }),

	awful.key({}, "Print", function()
		awful.spawn.with_shell("scrot -s $(zenity --file-selection --save --file=/tmp/screenshot.png)")
	end, { description = "take a screenshot", group = "screenshot" }),

	-- awful.key({}, "Print", function()
	-- 	awful.util.spawn("scrot")
	-- end, { description = "take a screenshot", group = "screenshot" }),

	-- by me end
	-- commented by me

	-- awful.key({ modkey }, "j", function()
	-- 	awful.client.focus.byidx(1)
	-- end, { description = "focus next by index", group = "client" }),

	awful.key({ modkey }, "k", function()
		awful.client.focus.byidx(1)
	end, { description = "focus next by index", group = "client" }),

	awful.key({ modkey, "Shift" }, "k", function()
		awful.client.focus.byidx(-1)
	end, { description = "focus previous by index", group = "client" }),

	awful.key({ modkey }, "w", function()
		mymainmenu:show()
	end, { description = "show main menu", group = "awesome" }),

	-- Layout manipulation
	awful.key({ modkey, "Shift" }, "j", function()
		awful.client.swap.byidx(1)
	end, { description = "swap with next client by index", group = "client" }),
	-- awful.key({ modkey, "Shift" }, "k", function()
	-- 	awful.client.swap.byidx(-1)
	-- end, { description = "swap with previous client by index", group = "client" }),

	-- this was commented by me
	-- awful.key({ modkey , "shift" }, "j", function()
	awful.key({ modkey }, "j", function()
		awful.screen.focus_relative(1)
	end, { description = "focus the next screen", group = "screen" }),

	awful.key({ modkey, "Control" }, "k", function()
		awful.screen.focus_relative(-1)
	end, { description = "focus the previous screen", group = "screen" }),
	awful.key({ modkey }, "u", awful.client.urgent.jumpto, { description = "jump to urgent client", group = "client" }),
	awful.key({ modkey }, "Tab", function()
		awful.client.focus.history.previous()
		if client.focus then
			client.focus:raise()
		end
	end, { description = "go back", group = "client" }),

	-- Standard program
	awful.key({ modkey }, "Return", function()
		awful.spawn(terminal)
	end, { description = "open a terminal", group = "launcher" }),

	awful.key({ modkey, "Control" }, "r", awesome.restart, { description = "reload awesome", group = "awesome" }),
	awful.key({ modkey, "Shift" }, "q", awesome.quit, { description = "quit awesome", group = "awesome" }),

	awful.key({ modkey }, "l", function()
		awful.tag.incmwfact(0.05)
	end, { description = "increase master width factor", group = "layout" }),
	awful.key({ modkey }, "h", function()
		awful.tag.incmwfact(-0.05)
	end, { description = "decrease master width factor", group = "layout" }),
	awful.key({ modkey, "Shift" }, "h", function()
		awful.tag.incnmaster(1, nil, true)
	end, { description = "increase the number of master clients", group = "layout" }),
	awful.key({ modkey, "Shift" }, "l", function()
		awful.tag.incnmaster(-1, nil, true)
	end, { description = "decrease the number of master clients", group = "layout" }),
	awful.key({ modkey, "Control" }, "h", function()
		awful.tag.incncol(1, nil, true)
	end, { description = "increase the number of columns", group = "layout" }),
	awful.key({ modkey, "Control" }, "l", function()
		awful.tag.incncol(-1, nil, true)
	end, { description = "decrease the number of columns", group = "layout" }),

	awful.key({ modkey }, "space", function()
		awful.layout.inc(1)
	end, { description = "select next", group = "layout" }),
	awful.key({ modkey, "Shift" }, "space", function()
		awful.layout.inc(-1)
	end, { description = "select previous", group = "layout" }),

	awful.key({ modkey, "Control" }, "n", function()
		local c = awful.client.restore()
		-- Focus restored client
		if c then
			c:emit_signal("request::activate", "key.unminimize", { raise = true })
		end
	end, { description = "restore minimized", group = "client" }),

	-- Prompt
	awful.key({ modkey }, "r", function()
		awful.screen.focused().mypromptbox:run()
	end, { description = "run prompt", group = "launcher" }),

	-- by  me start
	awful.key({ modkey }, "d", function()
		open_or_move_to_tag("discord", 4)
	end, { description = "Open or move VS doee to 4th tag", group = "client" }),

	---- vs code start ----
	awful.key({ modkey, "Shift" }, "v", function()
		awful.spawn("code")
	end, { description = "open code", group = "applications" }),

	awful.key({ modkey }, "v", function()
		open_or_move_to_tag("Code", 8)
	end, { description = "Open or move VS Code to 8th tag", group = "client" }),
	---- vs code end ----

	---- chrome start ----
	awful.key({ modkey, "Shift" }, "c", function()
		awful.spawn("google-chrome-stable")
	end, { description = "open Google Chrome", group = "applications" }),

	awful.key({ modkey }, "c", function()
		open_or_move_to_tag("Google-chrome", 9)
	end, { description = "Open or move Chrome to 9th tag", group = "client" }),
	---- chrome end ----

	---- brave start ----
	awful.key({ modkey, "Shift" }, "b", function()
		awful.spawn("brave-browser")
	end, { description = "open brave ", group = "applications" }),

	awful.key({ modkey }, "b", function()
		open_or_move_to_tag("Brave-browser", 7)
	end, { description = "Open or move brave to 7th tag", group = "client" }),
	---- brave end ----

	---- firefox start ----
	awful.key({ modkey, "Shift" }, "y", function()
		awful.spawn("firefox")
	end, { description = "open Firefox", group = "applications" }),

	awful.key({ modkey }, "y", function()
		open_or_move_to_tag("firefox", 6)
	end, { description = "Open or move Firefox to 6th tag", group = "client" }),
	---- firefox end ----

	awful.key({ modkey }, "p", function()
		menubar.show()
	end, { description = "show the menubar", group = "launcher" })
)

clientkeys = gears.table.join(
	awful.key({ modkey }, "f", function(c)
		c.fullscreen = not c.fullscreen
		c:raise()
	end, { description = "toggle fullscreen", group = "client" }),
	-- awful.key({ modkey, "Shift" }, "c", function(c)
	awful.key({ modkey }, "x", function(c)
		c:kill()
	end, { description = "close", group = "client" }),
	awful.key({ modkey }, "q", function(c)
		c:kill()
	end, { description = "close", group = "client" }),
	awful.key(
		{ modkey, "Control" },
		"space",
		awful.client.floating.toggle,
		{ description = "toggle floating", group = "client" }
	),
	awful.key({ modkey, "Control" }, "Return", function(c)
		c:swap(awful.client.getmaster())
	end, { description = "move to master", group = "client" }),

	awful.key({ modkey }, "o", function(c)
		local focused_client = client.focus
		if focused_client then
			local screen_index = awful.screen.focused().index
			local target_screen = (screen_index % screen.count()) + 1
			if focused_client.class == "Code" then
				move_to_tag_on_screen(focused_client, 8, screen[target_screen])
			elseif focused_client.class == "discord" then
				move_to_tag_on_screen(focused_client, 4, screen[target_screen])
			elseif focused_client.class == "Brave-browser" then
				move_to_tag_on_screen(focused_client, 7, screen[target_screen])
			elseif focused_client and focused_client.class == "Google-chrome" then
				move_to_tag_on_screen(focused_client, 9, screen[target_screen])
			elseif focused_client and focused_client.class == "firefox" then
				move_to_tag_on_screen(focused_client, 6, screen[target_screen])
			else
				c:move_to_screen()
			end
			c:move_to_screen()
			c:move_to_screen()
		else
			awful.tag.viewnext()
		end
	end, { description = "move to screen", group = "client" }),

	awful.key({ modkey }, "t", function(c)
		c.ontop = not c.ontop
	end, { description = "toggle keep on top", group = "client" }),
	awful.key({ modkey }, "n", function(c)
		-- The client currently has the input focus, so it cannot be
		-- minimized, since minimized clients can't have the focus.
		c.minimized = true
	end, { description = "minimize", group = "client" }),
	awful.key({ modkey }, "m", function(c)
		c.maximized = not c.maximized
		c:raise()
	end, { description = "(un)maximize", group = "client" }),
	awful.key({ modkey, "Control" }, "m", function(c)
		c.maximized_vertical = not c.maximized_vertical
		c:raise()
	end, { description = "(un)maximize vertically", group = "client" }),
	awful.key({ modkey, "Shift" }, "m", function(c)
		c.maximized_horizontal = not c.maximized_horizontal
		c:raise()
	end, { description = "(un)maximize horizontally", group = "client" })
)

-- Bind all key numbers to tags.
-- Be careful: we use keycodes to make it work on any keyboard layout.
-- This should map on the top row of your keyboard, usually 1 to 9.
for i = 1, 9 do
	globalkeys = gears.table.join(
		globalkeys,
		-- View tag only.
		awful.key({ modkey }, "#" .. i + 9, function()
			local screen = awful.screen.focused()
			local tag = screen.tags[i]
			if tag then
				tag:view_only()
			end
		end, { description = "view tag #" .. i, group = "tag" }),
		-- Toggle tag display.
		awful.key({ modkey, "Control" }, "#" .. i + 9, function()
			local screen = awful.screen.focused()
			local tag = screen.tags[i]
			if tag then
				awful.tag.viewtoggle(tag)
			end
		end, { description = "toggle tag #" .. i, group = "tag" }),
		-- Move client to tag.
		awful.key({ modkey, "Shift" }, "#" .. i + 9, function()
			if client.focus then
				local tag = client.focus.screen.tags[i]
				if tag then
					client.focus:move_to_tag(tag)
				end
			end
		end, { description = "move focused client to tag #" .. i, group = "tag" }),
		-- Toggle tag on focused client.
		awful.key({ modkey, "Control", "Shift" }, "#" .. i + 9, function()
			if client.focus then
				local tag = client.focus.screen.tags[i]
				if tag then
					client.focus:toggle_tag(tag)
				end
			end
		end, { description = "toggle focused client on tag #" .. i, group = "tag" })
	)
end

clientbuttons = gears.table.join(
	awful.button({}, 1, function(c)
		c:emit_signal("request::activate", "mouse_click", { raise = true })
	end),
	awful.button({ modkey }, 1, function(c)
		c:emit_signal("request::activate", "mouse_click", { raise = true })
		awful.mouse.client.move(c)
	end),
	awful.button({ modkey }, 3, function(c)
		c:emit_signal("request::activate", "mouse_click", { raise = true })
		awful.mouse.client.resize(c)
	end)
)

-- Set keys
root.keys(globalkeys)
-- }}}

-- {{{ Rules
-- Rules to apply to new clients (through the "manage" signal).
awful.rules.rules = {
	-- All clients will match this rule.

	{

		rule = {},
		properties = {
			border_width = beautiful.border_width,
			border_color = beautiful.border_normal,
			focus = awful.client.focus.filter,
			raise = true,
			keys = clientkeys,
			buttons = clientbuttons,
			screen = awful.screen.preferred,
			placement = awful.placement.no_overlap + awful.placement.no_offscreen,
		},
	},

	-- Floating clients.
	{
		rule = { class = "Xfce4-terminal" },
		properties = { width = 200 },
	},
	{
		rule_any = {
			instance = {
				"DTA", -- Firefox addon DownThemAll.
				"copyq", -- Includes session name in class.
				"pinentry",
			},
			class = {
				"Arandr",
				"Blueman-manager",
				"Gpick",
				"Kruler",
				"MessageWin", -- kalarm.
				"Sxiv",
				"Tor Browser", -- Needs a fixed window size to avoid fingerprinting by screen size.
				"Wpa_gui",
				"veromix",
				"xtightvncviewer",
			},

			-- Note that the name property shown in xprop might be set slightly after creation of the client
			-- and the name shown there might not match defined rules here.
			name = {
				"Event Tester", -- xev.
			},
			role = {
				"AlarmWindow", -- Thunderbird's calendar.
				"ConfigManager", -- Thunderbird's about:config.
				"pop-up", -- e.g. Google Chrome's (detached) Developer Tools.
			},
		},
		properties = { floating = true },
	},

	-- Add titlebars to normal clients and dialogs
	{ rule_any = { type = { "normal", "dialog" } }, properties = { titlebars_enabled = false } },
}

-- {{{ Signals
-- Signal function to execute when a new client appears.
client.connect_signal("manage", function(c)
	-- Set the windows at the slave,
	-- i.e. put it at the end of others instead of setting it master.
	-- if not awesome.startup then awful.client.setslave(c) end

	if awesome.startup and not c.size_hints.user_position and not c.size_hints.program_position then
		-- Prevent clients from being unreachable after screen count changes.
		awful.placement.no_offscreen(c)
	end
end)

-- Add a titlebar if titlebars_enabled is set to true in the rules.
client.connect_signal("request::titlebars", function(c)
	-- buttons for the titlebar
	local buttons = gears.table.join(
		awful.button({}, 1, function()
			c:emit_signal("request::activate", "titlebar", { raise = true })
			awful.mouse.client.move(c)
		end),
		awful.button({}, 3, function()
			c:emit_signal("request::activate", "titlebar", { raise = true })
			awful.mouse.client.resize(c)
		end)
	)

	awful.titlebar(c):setup({
		{ -- Left
			awful.titlebar.widget.iconwidget(c),
			buttons = buttons,
			layout = wibox.layout.fixed.horizontal,
		},
		{ -- Middle
			{ -- Title
				align = "center",
				widget = awful.titlebar.widget.titlewidget(c),
			},
			buttons = buttons,
			layout = wibox.layout.flex.horizontal,
		},
		{ -- Right
			awful.titlebar.widget.floatingbutton(c),
			awful.titlebar.widget.maximizedbutton(c),
			awful.titlebar.widget.stickybutton(c),
			awful.titlebar.widget.ontopbutton(c),
			awful.titlebar.widget.closebutton(c),
			layout = wibox.layout.fixed.horizontal(),
		},
		layout = wibox.layout.align.horizontal,
	})
end)

-- Enable sloppy focus, so that focus follows mouse.
client.connect_signal("mouse::enter", function(c)
	c:emit_signal("request::activate", "mouse_enter", { raise = false })
end)

client.connect_signal("focus", function(c)
	c.border_color = beautiful.border_focus
end)
client.connect_signal("unfocus", function(c)
	c.border_color = beautiful.border_normal
end)

-- Autostart Application
awful.spawn.with_shell("picom --config ~/.config/picom.conf") -- for rounded borders
awful.spawn.with_shell("imwheel") -- for mouse scroll speed
awful.util.spawn("xinput set-button-map 9 3 2 1") -- swap the mouse buttons left to right and right to left
awful.spawn.with_shell(
	"xrandr --output HDMI-A-0 --mode 1366x768 --pos 1366x0 --rotate normal --output DVI-D-0 --primary --mode 1366x768 --pos 0x0 --rotate normal"
) -- to swap the monitor and set them into their own places
awful.spawn.with_shell("unclutter -idle 1.2") -- auto hide cursor
awful.spawn.with_shell("nitrogen --restore")
