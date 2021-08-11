const Discord = require("discord.js");
exports.run = (client, message, args) => {
const help = new Discord.RichEmbed()
.setDescription('**Commands**',  'https://imgur.com/O5uxbbM.png' )
.setColor(`RANDOM`)
.addField("||  ||  Information", "\n`| !ping | | !uptime | | !pay | | !serverinfo |  `")
.setTimestamp()

.setFooter('test', 'https://imgur.com/O5uxbbM.png');


message.channel.send(help);

}