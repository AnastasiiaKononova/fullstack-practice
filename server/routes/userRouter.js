const userRouter = require("express").Router();
const UserController = require("../controllers/User.controller");
const {hashPass} = require("../middlewares/hashPass");

userRouter.post("/", hashPass, UserController.createUser);

module.exports = userRouter;
