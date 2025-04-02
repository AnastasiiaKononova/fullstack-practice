const { verifyAccessToken } = require("../service/tokenService");
const TokenError = require("../errors/TokenError");

module.exports.checkToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;
    if (!authorization) {
      throw new TokenError("Need authorization");
    }
    const [, token] = authorization.split(" ");
    req.payload = await verifyAccessToken(token);
    next();
  } catch (error) {
    next(error);
  }
};

/*
1. Запит приходить без токена
    Помилка 401 - Unauthorized
2. Запит приходить з токеном у заголовках
    2.1 Витягаємо токен з заголовка
    2.2 Перевіряємо (верифікуємо) токен:
        - якщо він валідний і все ок - викликаємо next()
        - якщо він невалідний - помилка 403 Forbidden
    Якщо він прострочився - надсилаємо 403 і змушуємо користувача оновити сесію

*/
