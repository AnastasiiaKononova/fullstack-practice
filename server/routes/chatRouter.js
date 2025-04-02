const chatRouter = require("express").Router();
const ChatController = require("../controllers/Chat.controller");
const { checkToken } = require("../middlewares/checkToken");

chatRouter.get("/", checkToken, ChatController.getAllUserChats);
chatRouter.post("/", ChatController.createChat);
chatRouter.get("/:chatId/user/:userId", ChatController.addUserToChat);

module.exports = chatRouter;
