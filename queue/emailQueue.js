// queue/emailQueue.js

const transport = require("../config/mail");

let queue = [];

function add(email){
    queue.push(email);
}

function processQueue(){

    if(queue.length === 0){
        return;
    }

    const email = queue.shift();

    transport.sendMail({
        from: "chat@sistema.com",
        to: email,
        subject: "Bem vindo!",
        text: "Seja bem vindo ao sistema!"
    });

    console.log("Email enviado para", email);
}

setInterval(processQueue,30000);

module.exports = { add };