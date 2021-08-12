

module.exports = (client, guild) => {
	 
	client.log('log', `Left guild ${guild.name} (${guild.id})`, '8188');
	client.settings.delete(guild.id);

	var gCount = client.guilds.size;
	var game = client.config.playingGame.replace('{{prefix}}', client.config.defaultSettings.prefix).replace('{{guilds}}', gCount);
	client.user.setPresence({ status: client.config.status, game: { name: game, type: 0 } });
};
