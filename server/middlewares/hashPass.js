const bcrypt = require("bcrypt");

const SALT_ROUND = 1;

module.exports.hashPass = async (req, res, next) => {
  try {
    const {
      body: { password },
    } = req;
    // хешуємо
    // додаємо готовий хеш до об'єкту з інфою (до body)
    req.body.passwordHash = await bcrypt.hash(password, SALT_ROUND);
    next();
  } catch (error) {
    next(error);
  }
};
