const socket = io("http://localhost:3000");

const chatForm = document.getElementById("chat-form");
const messages = document.getElementById("messages");
const messageTemplate = document.querySelector("#message-template").innerHTML;

// get room name
const roomName = document.querySelectorAll(".room");
const topRoomName = roomName[0].innerText;

//Get username and room from prompt
// let username = prompt("enter username");
// let room = prompt("enter room");

roomName.forEach((room) => {
  room.addEventListener("click", (e) => {
    document.querySelector(".right").style.display = "block";
    var basliqAdi = document.getElementById("basliq").innerText;

    socket.emit("joinRoom", {
      username: "amil",
      room: e.target.innerText,
      oldRoomName: basliqAdi,
      topRoomName: topRoomName,
    });

    document.getElementById("basliq").innerText = e.target.innerText;
  });
});

//join chatroom

//Message from server
socket.on("message", (message) => {
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    time: message.time,
  });
  messages.insertAdjacentHTML("beforeend", html);
});

//message submit

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get message text
  const msg = e.target.elements.msg.value;

  //Emit mnessage to server
  socket.emit("chatMessage", msg);

  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

// const socket = io('http://localhost:3000')

// // Elements
// const $messageForm = document.querySelector('#message-form')
// const $messageFormInput = $messageForm.querySelector('input')
// const $messages = document.querySelector('#messages')

// // Templates
// const messageTemplate = document.querySelector('#message-template').innerHTML

// //Options

// var options = {username: 'Andrew', room: 'South Philly', };
// var {username, room} = options;

// $messageForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const message = e.target.elements.message.value
//     socket.emit('sendMessage', message)
// })

// socket.emit('join', {username, room})

// var roomItems = document.querySelectorAll('.room')
// roomItems.forEach((room)=>{
//   room.addEventListener('click', (e)=>{
//    var roomName = e.target.innerText
//     socket.emit('roomName',roomName)
//   })
// })
