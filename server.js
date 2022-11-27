const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { formatMessage } = require("./utils/messages");
const { userJoin, getCurrentUser } = require("./utils/users");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static(path.join(__dirname, "public")));
const PORT = 3000 || process.env.PORT;

const botName = "Slack Bot";

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room, oldRoomName, topRoomName }) => {
    const user = userJoin(socket.id, username, room);

    if (!user.room === oldRoomName) {
      socket.leave(oldRoomName);
    }
    socket.join(user.room);
    console.log("bu yeni ad", room);
    console.log("bu kohne ad", oldRoomName);

    // }
    //welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to Slack"));
  });

  //listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
