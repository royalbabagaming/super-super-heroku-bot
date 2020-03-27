const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkyMjU1MTY4MzAwODQzMDk5.XnxYkA.x1n5bxJSgavqh9He6rC9DA5VYFY';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }   
})    

bot.on('message', msg=>{
    if(msg.content === "HI"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "hi"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "hello"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "Hi"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "Hello"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "hey"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "HEY"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "Hey"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "help"){
        msg.reply('How May I Help You Sir?!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "Help"){
        msg.reply('How May I Help You Sir?!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "kaise ho"){
        msg.reply('Badiya Hu Tum Btao!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "Kaise ho"){
        msg.reply('Badiya Hu Tum Btao!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "kese ho"){
        msg.reply('Badiya Hu Tum Btao!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "pubg khelte ho"){
        msg.reply('hn H2K HARSH hai usse sich rha hu kyoki wo bahut pro hai!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "arre thank you"){
        msg.reply('nhi aap scchi pro ho!');
    }   
})

bot.login(token);
