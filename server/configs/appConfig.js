module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://nastya:Anastasiia123456789@cluster0.1mp7w.mongodb.net/",
  DB_NAME: process.env.DB_NAME || "fullstack-chat",
};
