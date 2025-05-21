const {Message, Chat} = require("../models");


module.exports.addMessage = async (message) => {
    try {
      const {body, chat, author} = message;
      // Треба передбачити відсутність картинок як таких
      const newMessageInstance = await Message.create({ body, chat, author});
      
      const chatInstance = await Chat.findById(chat);
      
      chatInstance.messages.push(newMessageInstance);
      await chatInstance.save();


      return newMessageInstance;
    //   res.status(201).send({ data: newMessageInstance });
    } catch (error) {
    }
  };