const { Telegraf } = require('telegraf');
require('dotenv').comfig();
const BOT_TOKEN = process.env.TELEGRAM_TOKEN; // Reemplaza con tu token de bot
const CHAT_ID = process.env.TELEGRAM_CHAT_ID; // Reemplaza con el ID del chat

const bot = new Telegraf(BOT_TOKEN);

async function sendMessage(text) {
    await bot.telegram.sendMessage(CHAT_ID, text);
}

module.exports = { sendMessage };
