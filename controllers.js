const axios = require('axios');
const {createConfig} = require('./utils');
const nodemailer = require('nodemailer');
const CONSTANTS = require('./constants');
const {google} = require('googleapis');

const {sendTelegramMessage} = require('./telegramBot')

require('dotenv').config();

const oaAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

oaAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});

async function getLastMail(req, res) {
    try {
        const url = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/messages?q=is:unread&maxResults=1`;
        const { token } = await oaAuth2Client.getAccessToken();
        const config = createConfig(url, token);
        const response = await axios(config);
        
        if (response.data.messages && response.data.messages.length > 0) {
            const messageId = response.data.messages[0].id;
            const messageUrl = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/messages/${messageId}`;
            const messageConfig = createConfig(messageUrl, token);
            const messageResponse = await axios(messageConfig);
            const messageData = messageResponse.data;

            const from = messageData.payload.headers.find(header => header.name === 'From').value;
            const subject = messageData.payload.headers.find(header => header.name === 'Subject').value;
            const body = messageData.snippet;

            const telegramMessage = `New Email:\nFrom: ${from}\nSubject: ${subject}\nBody: ${body}`;
            sendTelegramMessage(process.env.TELEGRAM_CHAT_ID, telegramMessage);

            res.json({ from, subject, body });
        } else {
            res.json({ message: 'No new emails found' });
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = {
    getLastMail
};