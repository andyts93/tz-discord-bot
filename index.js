require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const moment = require('moment-timezone');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});


client.on('ready', () => {
    console.log('ready');

    client.user.setActivity(moment().tz(process.env.TIMEZONE).format('HH:mm z'), {
        type: 3
    });

    setInterval(() => {
        client.user.setActivity(moment().tz(process.env.TIMEZONE).format('HH:mm z'), {
            type: 3
        });
    }, 60000);
});



client.login(process.env.TOKEN);