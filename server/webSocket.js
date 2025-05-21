const NotificationController = require("./controllers/Notification.controller");
const WSChatController = require("./controllers/WS.Chat.controller");
const {CONSTANTS: { NEW_MESSAGE, ADD_MESSAGE_TO_CHAT}} = require("./constants");

module.exports.createWebsocketConnect = (socket) => {
  //  socket.on('message-type', eventListener) - підписка на конкретний тип повідомлень з клієнта
  //  socket.emit('message') - відправка повідомлення всім, хто підписаний на них
  console.log("CONNECTION  IS ON");

  socket.on(NEW_MESSAGE, async (message) => {
    const returnedMessage = await WSChatController.addMessage(message);
    socket.emit(ADD_MESSAGE_TO_CHAT, returnedMessage)
  })
}