

module.exports = (client, guild) => {
	
	wait(1000);
	client.log('log', `Joined guild ${guild.name} (${guild.id})`, '818193256088600596');
	client.settings.set(guild.id, client.config.defaultSettings);

	var gCount = client.guilds.size;
	var game = client.config.playingGame.replace('{{prefix}}', client.config.defaultSettings.prefix).replace('{{guilds}}', gCount);
	client.user.setPresence({ status: client.config.status, game: { name: game, type: 0 } });
};
