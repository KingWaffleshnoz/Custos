const Discord = require('discord.js');
const bot = new Discord.Client(require("./config.json").opts);
require('./funcs.js')(bot);
const readdir = require("fs").readdir;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

readdir('./modules/', (err, files) => {
	bot.log(`Loading ${files.length} modules!`);
	files.forEach(modules => {
		try {
			var name = require(`./modules/${modules}`).name
			bot.commands.set(name, require(`./fun/${modules}`));
		} catch (efun) {
			bot.log(`Unable to load command ${modules}: ${efun}`);
		}
	});
	bot.log(`Modules loaded!`);
});

readdir('./events/', (err, files) => {
	bot.log(`Loading ${files.length} events!`);
	files.forEach(file => {
		bot.on(file.split(".")[0], (...args) => {
			require(`./events/${file}`).run(bot, ...args);
		});
	});
	bot.log(`Events loaded!`);
});

var restart;
bot.on('ready', () => {
	restart = bot.channels.get('688269125860327527'); // Channel to send notification
});

const TARGET_HOUR_R = 4;
const TARGET_MINUTE_R = 21;

setInterval(function () {
	var d2 = new Date();
	if (d2.getMinutes() !== TARGET_MINUTE_R || d2.getHours() !== TARGET_HOUR_R) return; // Return if current minute is not the notify minute
	setTimeout(function () {
		process.exit();
	}, 1000);
	restart.send("[AUTO RESTART] | Custos successfully restarted!")
}, 60 * 1000); // Check every minute

bot.login(require("./config.json").token);