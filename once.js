const { Telegraf } = require('telegraf');

require('dotenv').config();

const self = {
    BOT_TOKEN: process.env.BOT_TOKEN,
    SECRET_PATH: process.env.SECRET_PATH,
}

const bot = new Telegraf(self.BOT_TOKEN);

(async () => {
  // set webhook
  await bot.telegram.setWebhook(`https://bot.zhangolve.workers.dev/${self.SECRET_PATH}`);

  // delete webhook
  // await bot.telegram.deleteWebhook();

  // get webhook info
  await bot.telegram.getWebhookInfo().then(console.log);
})();