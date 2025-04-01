const { promisify } = require("node:util");
const jwt = require("jsonwebtoken");

const promisifyJWTSign = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);

const SECRET_KEY = "Super-important-value";

// jwt.sign(payload)
// payload - друга частина токена, яка містить корисне навантаженя токена
// ніколи не зберігаємо в токенах паролі!!!

module.exports.createToken = async (userId, email) => {
  const payload = {
    userId,
    email,
  };
  const options = {
    expiresIn: 360,
  };
  return await promisifyJWTSign(payload, SECRET_KEY, options);
};

module.exports.verifyToken = async (token) => {
  return await promisifyJWTVerify(token, SECRET_KEY); // результатом роботи буде або готовий розшифрований payload (якщо все окей, токен валідний і не прострочений) або помилка:
  // TokenExpiredError - якщо токен правильний, але прострочився
  // JsonWebTokenError - якщо він коцнутий
};
