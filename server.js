const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

let onlineUsers = 0;

io.on("connection", (socket) => {
    onlineUsers++;
    io.emit("onlineCount", onlineUsers);

    socket.on("join", (username) => {
        socket.username = username;
        io.emit("status", `${username} joined`);
    });

    socket.on("message", (data) => {
        io.emit("message", data);
    });

    socket.on("typing", (username) => {
        socket.broadcast.emit("typing", username);
    });

    socket.on("stopTyping", () => {
        socket.broadcast.emit("stopTyping");
    });

    socket.on("disconnect", () => {
        onlineUsers--;
        io.emit("onlineCount", onlineUsers);
        if (socket.username) {
            io.emit("status", `${socket.username} left`);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});