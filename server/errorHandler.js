const AuthError = require("./errors/AuthError");
const { TokenExpiredError, JsonWebTokenError } = require("jsonwebtoken");
module.exports.errorHandler = async (err, req, res, next) => {
  if (err instanceof AuthError) {
    return res.status(401).send(err.message || "Need authorization");
  }

  if (err instanceof TokenExpiredError || err instanceof JsonWebTokenError) {
    return res.status(403).send("Token is outdated");
  }
  console.log(err);
  /* 
     NEED REFACTOR: створити кастомну помилку для випадків, коли за вказаним у токені userId неможливо знайти юзера або його чати
   */
  return res.status(500).send(err.message);
};
