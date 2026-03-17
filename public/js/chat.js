const socket = io();

function sendMessage(){
  const input = document.getElementById("msg");

  socket.emit("message", input.value);

  input.value = "";
}

socket.on("message", (msg) => {

  const li = document.createElement("li");

  li.innerText = msg;

  document.getElementById("messages").appendChild(li);

});