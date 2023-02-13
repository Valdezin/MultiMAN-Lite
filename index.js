const aoijs = require("aoi.js");
const config  = require('./config.json');

const bot = new aoijs.AoiClient({
  token: config.TOKEN, //Discord Bot Token
  prefix: config.PREFIX, //Prefix for commands
  intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent", "DirectMessages"], //Intents
  events: ["onMessage","onInteractionCreate","onJoin"]
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
