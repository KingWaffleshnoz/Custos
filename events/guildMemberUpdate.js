var Discord = require('discord.js');

var arr = [`dead weight`, `cant pvp`, `bad bow aim`]

exports.run = (bot, oldMember, newMember) => {
    if (oldMember.id == "356165670221643776" && oldMember.nickname != newMember.nickname && arr.indexOf(newMember.nickname) < 0) {
        newMember.setNickname(arr[Math.floor(Math.random() * arr.length)])
        /**
        var channel = newMember.guild.channels.get("399740385221672974")
        //channel.send("Bjorn but with a Ch wouldn't want you to change you name, Chenjamin with a B. Just let it happen.");
        */
    }
}