const { REST, Routes } = require("discord.js");

const commands = [
    {
        name: "ping",
        description: "Replies with pong!",
    },
]

const rest = new REST({ version: "10" }).setToken("MTE2Nzg0MjMyNzQ0MDY2MjYzMw.Gk0YTp.HS0uuqhzKQEBCmLC7N-wrSrinC_ziU9ierQauM");

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1167842327440662633"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}