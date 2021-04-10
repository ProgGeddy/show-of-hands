module.exports = {
	name: 'role',
	description: 'Allows a user to assign themself a role(s).',
	cooldown: 5,
	execute(message) {
		if (!message.mentions.roles.size) {
			return message.reply('You need to provide a valid server role to give yourself!');
		}

		const roleToAdd = message.member.guild.roles.cache.find(role => role.name === message.mentions.roles[0]);
		console.error(roleToAdd);
		if (roleToAdd) message.guild.members.cache.get(message.author.id).roles.add(roleToAdd);

		// console.error(message);
		// const roleToAdd = message.client.member.guild.roles.cache.find(role => role.name === message.mentions.roles[0]);
		// console.error(roleToAdd);
		// message.client.member.roles.add(roleToAdd);
	},
};