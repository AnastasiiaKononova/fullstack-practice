const NotificationController = require("./controllers/Notification.controller");

module.exports.createWebsocketConnect = (socket) => {
  //  socket.on('message-type', eventListener) - підписка на конкретний тип повідомлень з клієнта
  //  socket.emit('message') - відправка повідомлення всім, хто підписаний на них
  console.log("CONNECTION  IS ON");
  socket.on("add_new_notification", (messageBody) => {
    console.log(messageBody);
  });

  /// TODO: створити сповіщення і надіслати його клієнту просто так без запиту
};
