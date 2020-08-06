// "Create React App" tooling expects to find the WWW root here,
// so we simply use this file to import the ./www directory.
//
// For the backend, we set the container's entrypoint to src/api/index.js

// module.exports = require('./www')

const TeleBot = require("telebot");
let counter = 0;
//instantiate Telebot with our token got in the BtFather
const bot = new TeleBot({
  token: "1210081882:AAEQNMiMjkup0ZL_SNHNbrV11GM6D2Y3EVk",
});

//our command
bot.on(["/start", "/hello"], (msg) => {
  //all the information about user will come with the msg
//   console.log(msg);

setInterval(async () => {
    let currentHour = new Date().getHours();
    let currentMin = new Date().getMinutes();
    
    if(currentHour == 21 && currentMin == 21){
        bot.sendMessage(msg.from.id, `Şewbaş Sercan`);
    }

    if(currentHour == 9 && currentMin == 30){
        bot.sendMessage(msg.from.id, `Rojbaş Sercan`);
    }

    if(currentHour == 12 && currentMin == 30){
        bot.sendMessage(msg.from.id, `İyi Günler Sercan`);
    }

    if(currentHour == 15 && currentMin == 25){
        bot.sendMessage(msg.from.id, `GoodAfternoon  Sercan`);
    }

    if(currentHour == 18 && currentMin == 30){
        bot.sendMessage(msg.from.id, `İyi Akşamlar Sercan`);
    }
  }, 60000);

//   let intervalId = setInterval(() => {
//     this.counter = this.counter + 1;
//     console.log("timer : ",this.counter);
//     if(this.counter === 60){
//       this.counter = 0;
//       //clearInterval(intervalId);
//     } 
// }, 1000);

});

//start polling
bot.start();
