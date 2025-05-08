const { User, Chat, Message } = require("../models");

module.exports.createChat = async (req, res, next) => {
  try {
    const { body, payload: {userId} } = req;
    const chat = await Chat.create({ ...body,members: [userId] });
    // const userInstance = await User.findById(userId);
    // chat.members.push(userInstance);
    // await chat.save();
    res.status(201).send({ data: chat });
  } catch (error) {
    next(error);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const {body, params: { chatId }, file,} = req;
    // Треба передбачити відсутність картинок як таких
    console.log(body);
    console.log(file);
    const newMessageInstance = await Message.create({ ...body, chat: chatId, imagePath: file?.filename});
    console.log(newMessageInstance);
    const chatInstance = await Chat.findById(chatId);
    console.log(chatInstance);
    chatInstance.messages.push(newMessageInstance);
    await chatInstance.save();
    res.status(201).send({ data: newMessageInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUserChats = async (req, res, next) => {
  try {
    const {
      payload: { userId },
    } = req;
    const allUserChats = await Chat.find({
      members: userId,
    });
    res.status(200).send({ data: allUserChats });
  } catch (error) {
    next(error);
  }
};

module.exports.addUserToChat = async (req, res, next) => {
  try {
    const {
      params: { chatId, userId },
    } = req;
    const foundChat = await Chat.findById(chatId);
    if (!foundChat) {
      throw new Error("Chat not found");
    }
    const userInstance = await User.findById(userId);
    foundChat.members.push(userInstance);
    await foundChat.save();
    res.status(200).send({
      data: "ok",
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getOneChat = async (req, res, next) => {
  try {
    const {
      params: { chatId },
    } = req;
    const foundChat = await Chat.findById(chatId)
      .populate("members")
      .populate("messages");
    //Need refactor: delete users passwords!!
    res.status(200).send({ data: foundChat });
  } catch (error) {
    next(error);
  }
};
