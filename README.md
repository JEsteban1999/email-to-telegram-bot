# Gmail to Telegram Email Forwarder

This project is a Node.js application that automatically checks for new emails in a Gmail account and forwards them to a specific Telegram chat. The application uses the Gmail and Telegram APIs to automate this process.

## Features

- **Automatic Email Checking**: The application checks for new emails every 5 minutes.
- **Telegram Notifications**: New emails are sent to a specific Telegram chat, including the sender, subject, and body of the message.
- **Simple Configuration**: Uses a `.env` file to store necessary credentials and settings.

## Requirements

- Node.js v14 or higher
- Gmail account with access to the Gmail API
- Telegram bot and chat ID

## Installation

1. Clone the repository:

```
   git clone https://github.com/your-username/gmail-to-telegram.git
   cd gmail-to-telegram
```

2. Install Dependencies:

```
   npm install
```

3. Configure the ```.env``` file with your credentials:

```
   PORT=3000
   CLIENT_ID=your_client_id
   CLIENT_SECRET=your_client_secret
   REDIRECT_URI=https://developers.google.com/oauthplayground
   REFRESH_TOKEN=your_refresh_token
   TELEGRAM_TOKEN=your_telegram_token
   TELEGRAM_CHAT_ID=your_chat_id
   EMAIL_ADDRESS=your_email_address@gmail.com
```

4. Start the application:

```
   node app.js
```

## Main files

- **app.js**: Configures and launches the Express server, initiating periodic email checks.
- **constants.js:**: Stores constants and configuration options for nodemailer.
- **controllers.js:**: Contains the logic for retrieving the latest unread email and sending it to Telegram.
- **routes.js:**: Defines the API routes.
- **telegram.js** and **telegramBot.js:**: Configure and send messages through the Telegram bot.
- **utils.js:**: Utility functions for creating HTTP request configurations.

## Usage

Once the application is running, it will automatically check for new emails in the specified Gmail account and send a message to the configured Telegram chat.
