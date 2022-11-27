// function joinNs(path) {
//   nsSocket = io(`http://localhost:3000${path}`);
 

// var roomList = document.getElementById("roomList");

// roomList.innerHTML += `
// <li class="room"><i class="fa-regular fa-hashtag"></i>developerler</li>
// <li class="room"><i class="fa-regular fa-hashtag"></i>adminler</li>
// <li class="room"><i class="fa-regular fa-hashtag"></i>networler</li>
// `;
  
// }

 


// function joinNs(path) {
//     nsSocket = io(`http://localhost:3000${path}`);
  
//     nsSocket.on("nsRoomLoad", (nsRooms) => {
//       let roomList = document.querySelector("#roomListUl");
//       roomList.innerHTML = "";
//       nsRooms.forEach((room) => {
//         roomList.innerHTML += `<li class="room"><i class="fa-regular fa-hashtag"></i> ${room.name}</li>`;
//       });
  
//       let singleRoom = document.getElementsByClassName("room");
//       Array.from(singleRoom).forEach((elem) => {
//         elem.addEventListener("click", (e) => {
//           let otaginAdi = document.querySelector("#otagin-adi");
//           let roomName = e.target.innerText;
  
//           otaginAdi.innerText = `${roomName}`;
//           joinRoom(roomName);
//         });
//       });
  
//       //add room automacilla first tune here
//       const topRoom = document.querySelector(".room");
//       const topRoomName = topRoom.innerText;
//       joinRoom(topRoomName);
//     });
  
//     document
//       .querySelector(".send-message-form")
//       .addEventListener("submit", (event) => {
//         event.preventDefault();
//         const newMessage = event.target.elements.msg.value;
  
//         let otaginAdi = document.querySelector("#otagin-adi").innerText;
//         nsSocket.emit("newMessageToServer", {
//           otaginAdi: otaginAdi,
//           message: newMessage,
//         });
//       });
  
//     nsSocket.on("messageToClients", (msg) => {
//       const newMsg = buildHTML(msg);
//       document.querySelector(".messages-ul").innerHTML += newMsg;
//     });
//   }
  
//   function buildHTML(msg) {
//     const newHTML = `
//     <li class="col-md-12">
//       <div class="user-image">
//         <img
//           src="${msg.avatar}"
//         />
//       </div>
//       <div class="user-message-infos">
//         <div class="user-name-time">
//         ${msg.username} <span>  ${msg.time}</span>
//         </div>
//         <div class="message-text">
//           ${msg.text}
//         </div>
//       </div>
//     </li>
//     `;
//     return newHTML;
//   }
  