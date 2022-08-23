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
const express = require('express'),
    url = require('url');
let app = express();

app.get('/s', (res, req) => {
    console.log(res.query);
    sendMsg(res.query)
})

let server = app.listen(process.env.PORT || 5000, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Web server started at http://%s:%s', host, port);
})
// http.createServer((request, response) => {
//     console.log('create server');

//         response.end('good');
// }).listen(3000, 'testrctprjct.herokuapp.com');

const sendMsg = async ({title, episode}) => {
    await bot.sendMessage(814253143, `
        Аниме ${title}
Вышла ${episode} серия
    `);
}
