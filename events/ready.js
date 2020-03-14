exports.run = async (bot, msg) => {
	bot.config = require('../config.json');
	bot.awaitConsoleInput();

	bot.user.setPresence({ status: 'online', game: { name: 'Go Bells! | c!help', type: 0 } });

	bot.log(`${bot.user.username} is online and ready to serve in ${bot.channels.size} channels on ${bot.guilds.size} servers!`);
}