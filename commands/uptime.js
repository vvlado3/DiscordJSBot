const { version } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const Discord = require('discord.js');

exports.run = (client, message, args, level) => {
	var time = Date.now();
	const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
	const embed = new Discord.RichEmbed()
		.setColor('BLUE')
		.setTitle(' Информация ')
		.addField(` Времетраене `, `${duration}`, true)
		.setFooter('AlphaHost', 'https://imgur.com/O5uxbbM.png');



	message.channel.send({ embed });
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'stats',
	category: 'Miscelaneous',
	description: 'Gives some useful bot statistics',
	usage: 'stats'
};
