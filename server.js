const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");

const chatSocket = require("./websocket/chatSocket");
const authRoutes = require("./routes/authRoutes");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.redirect("/login.html");
});

chatSocket(io);

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});