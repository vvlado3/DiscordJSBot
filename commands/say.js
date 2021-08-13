const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var m = args.join(' ');
   var c = "Plus";


    if (!m) return message.reply('Трябва да напишете нещо...');
    const embed = new Discord.RichEmbed()
        .setDescription(m)
        .setColor(`BLUE`)
        .setTimestamp()
    message.channel.send({ embed });
    message.delete(10);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'embed',
    category: 'Miscelaneous',
    description: 'Embeds something',
    usage: 'embed [description]'
};