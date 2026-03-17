// websocket/chatSocket.js

function chatSocket(io){

    io.on("connection", (socket)=>{

        console.log("Usuário conectado");

        socket.on("message",(msg)=>{

            io.emit("message",msg);

        });

    });

}

module.exports = chatSocket;