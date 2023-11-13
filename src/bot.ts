import { Client, ActivityType } from "discord.js";
import Commands from "./handlers/commands.js";
import Events from "./handlers/events.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  presence: {
    activities: [{ name: "with /settings!", type: ActivityType.Playing }]
  },
  intents: [
    "Guilds",
    "GuildMembers",
    "GuildMessages",
    "GuildEmojisAndStickers",
    "GuildPresences",
    "MessageContent"
  ]
});

client.on("ready", async () => {
  new Events(client);
  console.log("Starting all commands.");
  await new Commands(client).registerCommands();
  console.log("ちーっす！");
});

client.login(process.env.TOKEN);
