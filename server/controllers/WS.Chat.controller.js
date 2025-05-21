const {Message, Chat} = require("../models");


module.exports.addMessage = async (message) => {
    try {
      const {body, chat, author, imagePath} = message;
      // Треба передбачити відсутність картинок як таких
      const newMessageInstance = await Message.create({ body, chat, author, imagePath});
      
      const chatInstance = await Chat.findById(chat);
      
      chatInstance.messages.push(newMessageInstance);
      await chatInstance.save();


      return newMessageInstance;
    //   res.status(201).send({ data: newMessageInstance });
    } catch (error) {
    }
  };