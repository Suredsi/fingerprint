const fs = require('fs');
const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const bot = new Client({
    authStrategy: new LocalAuth({
    })
});
function botsession(){
    bot.on('qr', qr => {
        qrcode.generate(qr, {small: true});
    });

    bot.on('authenticated', () => {
        console.log("success")
    });
    bot.initialize();
}
module.exports = {bot, botsession}