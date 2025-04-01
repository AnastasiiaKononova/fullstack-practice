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
        const newMessageInstance = await Message.create({...body, chat: chatId});
        const chatInstance = await Chat.findById(chatId);
        chatInstance.message.push(newMessageInstance);
        await chatInstance.save();
        res.status(201).send({data: newMessageInstance});
    } catch(error) {
        next(error)
    }
}