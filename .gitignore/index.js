const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = ("!");
var randnum = 0;
function random(min, max) {
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
bot.on('ready', () =>{
    bot.user.setPresence({ game : { name: 'Pierre Feuille Ciseau', type:0} });
    console.log('Bot Ready !');
});
bot.login('NTEwNjE2ODk5MTI2NTU4NzIy.DshZKA.fsOx9QIlMYFKrwNLfq9fayuBgXY');
bot.on('message', message => {
    if (message.content === prefix + 'ping'){
        message.channel.send("pong");
        console.log('ping pong');
    }
    if (message.content === prefix + "help"){
        message.channel.send("Voici les commandes du bot:\n - !help pour afficher les commandes");
        console.log("Commande Help demandée !")
    }
    if (message.content === prefix + "zone"){
        
        random(0,2)

        if (randnum  == 0){
            message.channel.send("Ciseau !");
            console.log(randnum);
        }

        if(randnum  == 1){
            message.channel.send("Feuille !");
            console.log(randnum);
        }

        if(randnum  == 2){
            message.channel.send("Pierre !");
            console.log(randnum);
        }
    }
    if (message.content === prefix + "dab"){
        message.channel.send("Bien joué mamaine :dab:");
        console.log('dab');
    }
    if (message.content === prefix + "felix"){

        random(0,1)

        if (randnum  == 0){
            message.channel.send("Miaou vous allez encaisser !");
            console.log(randnum);
        }

        if (randnum  == 1){
            message.channel.send("Miaou pas de chance !");
            console.log(randnum);
        }
        
    }
});
