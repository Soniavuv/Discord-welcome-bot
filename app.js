const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES] });
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", (member) =>{ 
  const channel = member.guild.channels.cache.find(channel => channel.name === "general") 
  if (!channel) return; 
  const { MessageEmbed } = require('discord.js');  
  const exampleEmbed = new MessageEmbed() 
  .setColor('#FF00FF') 
  .setTitle('New Member joined!!') 
  .setDescription(`${member.user.tag} has joined the server! Give them a warm welcome!`)

  channel.send({ embeds: [exampleEmbed] });

});

client.login(config.token);
