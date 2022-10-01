const aoijs = require("aoi.js");
const config  = require('./config.json');

const bot = new aoijs.AoiClient({
  token: config.TOKEN, //Discord Bot Token
  prefix: config.PREFIX, //Prefix for commands
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
})
//Events
bot.onInteractionCreate()
bot.onMessage()
bot.onJoin()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")


  



