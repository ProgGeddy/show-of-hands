// Require the discord.js module.
const Discord = require('discord.js');

// fs is Node's native file system module.
const fs = require('fs');

// Retrieve any config variables necessary.
const { prefix, token } = require('./config.json');

// Create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

// This event will only trigger one time after logging in
client.once('ready', () => {
	console.log('We have liftoff!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) { return; }

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) { return; }

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Login to Discord with your app's token
client.login(token);
