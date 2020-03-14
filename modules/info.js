module.exports = {
  name: 'info',
  permission: 1,
  main: function (bot, msg) {
      msg.channel.send({
        embed: 
        { color: 3447003,
          footer: {
            icon_url: msg.guild.iconURL,
            text: msg.guild.name 
          },
          author: {
            name: "Bot Information",
            icon_url: msg.guild.iconURL
          },
          fields: [
            {
              name: "General:",
              value: "WIP"
            },
            {
              name: "Last Update: v1.0.0",
              value: "WIP"
            },
            /*CHECK GITHUB FOOTERS*/
            {
              name: "GitHub: v1.0.0",
              value: "https://github.com/KingWaffleshnoz/Custos\nNote that this page is still a WIP."
            }
          ]
        }
      });
  }
}