const http = require('http');
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const server = http.createServer(app);

const bot = new TelegramBot('6245614297:AAHSK1fRtjevCo3WnsIQamGEBCX-2vAYQsA', { polling: true });

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello World!');
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
