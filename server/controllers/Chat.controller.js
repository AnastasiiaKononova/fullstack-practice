const {User, Chat, Message} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const chat = await Chat.create(body);
        res.status(201).send({data: chat})
    } catch(error) {
        next(error)
    }
}

module.exports.addMessage = async (req, res, next) => {
    try {
        const {body, params: {chatId}} = req;
        const newMessageInstanse = await Message.create({...body, chat: chatId});
        const chatInstanse = await Chat.findById(chatId);
        chatInstanse.message.push(newMessageInstanse);
        await chatInstanse.save();
        res.status(201).send({data: newMessageInstanse});
    } catch(error) {
        next(error)
    }
}