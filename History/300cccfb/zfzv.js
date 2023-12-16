const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  console.log(message.content);
});

client.login("MTE2Nzg0MjMyNzQ0MDY2MjYzMw.Gk0YTp.HS0uuqhzKQEBCmLC7N-wrSrinC_ziU9ierQauM");
