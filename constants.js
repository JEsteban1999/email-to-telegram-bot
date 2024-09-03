require('dotenv');

const auth = {
    type: 'OAuth2',
    user: process.env.USER_EMAIL,
    clientId: process.env.CLIENT_ID, 
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
}

const mailOptions = {
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}

module.exports = {
    auth,
    mailOptions
}