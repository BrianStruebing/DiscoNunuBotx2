const discord = require("discord.js");

module.exports.run = async(bot, message) => {
	message.reply("pong")
};

module.exports.help = {
	name:"ping"
}