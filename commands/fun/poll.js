const Discord = require('discord.js');

module.exports = {
	name: 'poll',
	description: 'Create a poll!',
	cooldown: 5,
	execute(message) {
		const pollMessage = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
			.setDescription('Some description here')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.addFields(
				{ name: 'Regular field title', value: 'Some value here' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			.addField('Inline field title', 'Some value here', true)
			.setImage('https://i.imgur.com/wSTFkRM.png')
			.setTimestamp()
			.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

		// TODO: Once a poll channel has been created, point this message at that channel.
		// Fetch a channel by its id.
		message.client.channels.fetch('737797410041888829')
			.then(channel => channel.send(pollMessage))
			.then(messageReaction => {
				messageReaction.react('👍');
				messageReaction.react('👎');
			})
			.catch(console.error);
	},
};