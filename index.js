const http = require('http'),
    url = require('url');

http.createServer((request, response) => {
    if (request.method == 'OPTIONS') {
        let parseUrl = url.parse(request.url, true);
        sendMsg(parseUrl.query)
        response.end('good');
    }
}).listen(3000);

const sendMsg = async ({title, episode}) => {
    await bot.sendMessage(814253143, `
        Аниме ${title}
Вышла ${episode} серия
    `);
}
const TelegramApi = require('node-telegram-bot-api'),
    token = "5631146732:AAFTU0cMlDKwbQt7WccxVLU6pVIx5c_M7Fw";

const bot = new TelegramApi(token, { polling: true });
const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Запуск бота' },
    ])

    bot.on('message', async msg => {
        const text = msg.text,
            chatId = msg.chat.id;
        console.log(msg);
        await bot.sendMessage(chatId, `Ты написал мне: ${text}`)

    })
}

start()