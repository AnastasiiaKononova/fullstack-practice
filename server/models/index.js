const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const { MONGODB_URI, DB_NAME } = require("../configs/appConfig");

const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME,
    });
  } catch (e) {
    console.error("❌ Failed to connect to MongoDB", e);
    process.exit(1);
  }
};

connectDb();
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected!");
});
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});
const models = {};
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    models[model.modelName] = model;
  });

module.exports = models;
