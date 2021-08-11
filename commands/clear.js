exports.run = (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Нямаш право!");
        if (isNaN(args[0])) return message.channel.send("Моля кажи колко!");
        if (args[0] > 1000) return message.channel.send("**Не можеш да изтриеш повече от 1000 съобщения.**");

        message.channel.bulkDelete(args[0])
        .then ( messages => message.channel.send(`**Бяха изтрити \`${messages.size}\` съобщения.**`)
        .then(message => {
            message.delete(10000)
          }))

}