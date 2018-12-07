const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready',()=>{
	console.log("Bot prêt !");
});

bot.login('NTIwNTk4NTAwNjA2NzM4NDMy.DuwRyQ.Lu76ASQkY8R-5x62iiuoXzum6Ng');

//ajout du role viewer
bot.on('guildMemberAdd',member=>{
	var role = member.guild.roles.find('name','viewer')
		member.addRole(role)
})
