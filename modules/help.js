module.exports = {
  name: 'help',
  permission: 1,
  main: function (bot, msg) {
      msg.channel.send({embed: {
          color: 3447003,
          author: {
            name: "Command Help:",
            icon_url: bot.user.avatarURL
          },
          fields: [
            {
              name: "c!listroles",
              value: "Lists all of the server's self-assignable roles as well as their descriptions."
            },
            {
              name: "c!addrole [role]",
              value: "Adds the inputted role to you."
            },
            {
              name: "c!removerole [role]",
              value: "Removes the inputted role from you."
            },
            {
              name: "c!ping",
              value: "Reports the bot ping."
            },
            {
              name: "j!uptime",
              value: "Reports the bot uptime."
            },
            {
              name: "c!info",
              value: "Sends version information to the chat."
            },
            {
              name: "c!rules",
              value: "Sends the server rules to the chat."
            }
          ],
          footer: {
            icon_url: msg.guild.iconURL,
            text: msg.guild.name
          }
        }
      });
  }
}