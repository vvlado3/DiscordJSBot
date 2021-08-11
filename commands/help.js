const Discord = require("discord.js");
exports.run = (client, message, args) => {
const help = new Discord.RichEmbed()
.setDescription('**Commands**',  'https://imgur.com/.png' )
.setColor(`RANDOM`)
.addField("||  ||  Information", "\n`| !ping | | !uptime | | !pay | | !serverinfo |  `")
.setTimestamp()

.setFooter('test', 'https://imgur.com/png');


message.channel.send(help);

}
