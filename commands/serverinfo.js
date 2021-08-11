const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let servericon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setTitle("❓ Server Information ❓")
        .setColor(`BLUE`)
        .setThumbnail(servericon)
        .addField("Име:", message.guild.name)
        .addField(" Съръвр ID:", message.guild.id)
        .addField("Собственик:", message.guild.owner)
        .addField(" Създаден на:", message.guild.createdAt)
		.addField(" Канали ", `${client.channels.size.toLocaleString()}`, true)
        .setTimestamp()

        return message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo"
}