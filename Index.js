const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!help") {
    message.reply(
      "Hello! Welcome to the Delta Discord server. This is where we provide you exploits with Roblox. " +
        "If you want help with iOS, please type **!iOS**. " +
        "If you want help with Android, please type **!Android**. " +
        "If the bot doesn't provide enough information, you may open a ticket and the staff will assist you. Thank you!",
    );
  }

  if (message.content === "!iOS") {
    message.reply(
      "**iOS Help**\nFor iOS Roblox exploit support, please open a ticket and a staff member will assist you!",
    );
  }

  if (message.content === "!Android") {
    message.reply(
      "**Android Help**\nFor Android Roblox exploit support, please open a ticket and a staff member will assist you!",
    );
  }
});

const token = process.env.DISCORD_TOKEN;

if (!token) {
  console.error("ERROR: DISCORD_TOKEN environment variable is not set!");
  console.error("Please add your bot token as the DISCORD_TOKEN secret.");
  process.exit(1);
}

client.login(token);
