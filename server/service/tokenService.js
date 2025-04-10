const { promisify } = require("node:util");
const jwt = require("jsonwebtoken");
const {
  CONSTANTS: {
    ACCESS_SECRET_VALUE,
    ACCESS_TIME,
    REFRESH_SECRET_VALUE,
    REFRESH_TIME,
  },
} = require("../constants");

const promisifyJWTSign = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);

const tokenConfig = {
  access: {
    secret: ACCESS_SECRET_VALUE,
    time: ACCESS_TIME,
  },
  refresh: {
    secret: REFRESH_SECRET_VALUE,
    time: REFRESH_TIME,
  },
};

// jwt.sign(payload)
// payload - друга частина токена, яка містить корисне навантаженя токена
// ніколи не зберігаємо в токенах паролі!!!

const createToken = ({ userId, email }, { time, secret }) => {
  return promisifyJWTSign(
    {
      userId,
      email,
    },
    secret,
    {
      expiresIn: time,
    }
  );
};

module.exports.createTokenPair = async (payload) => {
  return {
    accessToken: await createToken(payload, tokenConfig.access),
    refreshToken: await createToken(payload, tokenConfig.refresh),
  };
};

const verifyToken = (token, { secret }) => promisifyJWTVerify(token, secret);

module.exports.verifyAccessToken = async (token) =>
  await verifyToken(token, tokenConfig.access);

// результатом роботи буде або готовий розшифрований payload (якщо все окей, токен валідний і не прострочений) або помилка:

// результатом роботи буде або готовий розшифрований payload (якщо все окей, токен валідний і не прострочений) або помилка:
// TokenExpiredError - якщо токен правильний, але прострочився
// JsonWebTokenError - якщо він коцнутий

module.exports.verifyRefreshToken = async (token) =>
  await verifyToken(token, tokenConfig.refresh);

// async function test () {
//     const rt = await createToken({userId: 'USER', email: 'MAIL'}, tokenConfig.refresh);
//     console.log(rt);
//     const res = await verifyToken(rt, tokenConfig.refresh);
//     console.log(res);
// }

// test();

/*
 
 AccessToken - живе мало, але використовується часто
 RefreshToken - живе довго, але одноразовий
 
 RefreshToken - потрібен 1 раз, коли ми хочемо оновити сесію користувача і видати йому новий AccessToken
 */
