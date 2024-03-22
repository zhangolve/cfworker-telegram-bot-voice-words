const { Telegraf } = require('telegraf');
const { Application, Router } = require('@cfworker/web');
const createTelegrafMiddleware = require('cfworker-middleware-telegraf');
require('dotenv').config();


const self = {
    BOT_TOKEN: process.env.BOT_TOKEN,
    SECRET_PATH: process.env.SECRET_PATH,
}

const bot = new Telegraf(self.BOT_TOKEN);

// Your code here, but do not `bot.launch()`
// Do not forget to set environment variables BOT_TOKEN and SECRET_PATH on your worker



async function getKv(key="concated_audio") {
    const result = await fetch(`${process.env.voice_words_REST_API_URL}/get/${key}`, {
        headers: {
            Authorization: `Bearer ${process.env.voice_words_REST_API_TOKEN}`
        }
    })
    const data = await result.json();
    return data;
}


bot.command('oldschool', async (ctx) => {
    const data = await getKv();
    await ctx.reply(data.result)
    await ctx.sendAudio(`http://r2.hktkdy.com/${data.result}`) 
    // ctx.reply(data.result)
})
bot.command('hipster', Telegraf.reply('λ'))

// bot.command('oldschool', (ctx) => ctx.reply('Hello'))





const router = new Router();
router.post(`/${self.SECRET_PATH}`, createTelegrafMiddleware(bot));
new Application().use(router.middleware).listen();
