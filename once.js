const { Telegraf } = require('telegraf');

const self = {
    BOT_TOKEN: '7186897700:AAG3Rf4Kbv-bBf_sgKwlBOOYbaLG_mnh9R4',
    SECRET_PATH: 'abc',
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