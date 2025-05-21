const NotificationController = require("./controllers/Notification.controller");
const WSChatController = require("./controllers/WS.Chat.controller");
const SocketIOFileUpload = require('socketio-file-upload');
const fs = require('fs/promises');
const {
  CONSTANTS: { NEW_MESSAGE, ADD_MESSAGE_TO_CHAT, IMAGE_STATIC_PATH },
} = require("./constants");
const { uploader } = require("./middlewares/wsUploader");

module.exports.createWebsocketConnect = (socket) => {
  //  socket.on('message-type', eventListener) - підписка на конкретний тип повідомлень з клієнта
  //  socket.emit('message') - відправка повідомлення всім, хто підписаний на них
  console.log("CONNECTION  IS ON");

  socket.on(NEW_MESSAGE, async (message) => {
    // const returnedMessage = await WSChatController.addMessage(message);
    // const uploader = new SocketIOFileUpload();
    // uploader.dir = IMAGE_STATIC_PATH;
    // uploader.listen(socket);
    // uploader.on("saved", (event) => {
    //     console.log(event.file);
    // });

    const fileName = await uploader(message.image);
    const returnedMessage = await WSChatController.addMessage({
      ...message,
      imagePath: fileName,
    });
    socket.emit(ADD_MESSAGE_TO_CHAT, returnedMessage);
  });
};
