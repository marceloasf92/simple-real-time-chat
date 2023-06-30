import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import { Messages } from "./src/db";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: `http://localhost:3000` } });

interface CustomSocket extends Socket {
  username?: string;
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/messages", (req, res) => {
  res.json(Messages);
});

app.post("/messages/insert", (req, res) => {
  Messages.push(req.body)
  res.json(Messages);
});

io.on("connection", (socket: CustomSocket) => {
  const sessionId = socket.handshake.query.sessionId;
  console.log("Nova conexão com a sessão:", sessionId);

  socket.on("join", (username) => {
    socket.username = username;
    console.log(`${socket.username} entrou no chat`);
    io.emit("userJoined", { message: `${socket.username} entrou no chat` });
  });

  socket.on("message", ({message, id, username}) => {
    console.log(`ID: ${id} | USUÁRIO: ${username} | Mensagem: ${message}`);
    Messages.push({message, id, username})
    io.emit("message", { username, message, id });
  });

  socket.on("disconnect", () => {
    console.log(`${socket.username} desconectou`);
    // Notifique todos os clientes sobre a desconexão do usuário
    io.emit("userLeft", { message: `${socket.username} desconectou` });
  });
});
const PORT = process.env.PORT || "3001";
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
