module.exports = {
    name: 'listroles',
    permission: 1,
    main: function(bot, msg) {
        msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "List of Self-Assignable Roles",
              icon_url: msg.guild.iconURL
            },
            title: "Use 'j!addrole' and 'j!removerole' to add/remove roles from yourself.",
            description: "DM an admin if you have any role suggestions!",
            fields: [{
                name: "Color Roles",
                value: "These roles do not grant access to any chats, but do change your username color. The available roles are: 'Jade', 'Emerald', 'Pine', 'Sky', 'Sea', 'Purple', 'Pink', 'Yellow', 'Gold', 'Orange', & 'Red'."
              }
            ],
            footer: {
              icon_url: msg.guild.iconURL,
              text: msg.guild.name
            }
          }
        });
    }
};