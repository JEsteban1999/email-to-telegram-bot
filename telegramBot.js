const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});

function sendTelegramMessage(chatId, text) {
    bot.sendMessage(chatId, text);
}

module.exports = { sendTelegramMessage };