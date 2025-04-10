const bcrypt = require("bcrypt");
const { User, RefreshToken } = require("../models");
const { deletePassword } = require("../utils/deletePassword");
const { createTokenPair } = require("../service/tokenService");
const { verifyRefreshToken } = require("../service/tokenService");
const AuthError = require("../errors/AuthError");

/*
Авторизація та аутентифікація юзера


Шифрування - перетворення вхідного тексту на інший з метою забезпечення приватності
HELLO
RPAAE

Хешування - перетворення вхідних даних довільної довжини у рядок фіксованої довжини
Перетворює дані у фарш

HELLO
kjh432kjh1234l1j123

This sunset is amaizing
rkjkj21k34kjh234kjk

Для хешування паролів треба:

1. Прийняти сирий пароль юзера при реєстраці
2. Перетворити його на хеш за допомогою хеш-функції
3. Створюючи нового юзера, створювати його з вже захешованим паролем




*/

module.exports.signUp = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body); // за потреби можемо вручну перераховувати поля, які передаємо в об'єкті на створення юзера
    const readyUser = deletePassword(createdUser);
    // перед тим, як повертати юзера, треба з об'єкта видалити пароль

    // TODO: створити сесію юзера
    // const tokens = await createTokenPair(readyUser.id, readyUser.email);
    const tokens = await createTokenPair({
      userId: readyUser.id,
      email: readyUser.email,
    });
    // зберегти RT до БД
    const add = await RefreshToken.create({
      token: tokens.refreshToken,
      userId: readyUser.id,
    });
    res.status(201).send({ data: readyUser, tokens });
  } catch (error) {
    next(error);
  }
};
/*
За потреби "підтвердження реєстрації" можемо зробити так:
1. При основній реєстрації замість створення обліковки генерувати токен зі всією інформацією в payload,
у відповідь надсилати просто статичну сторінку "перевірте пошту та продовжіть реєстрацію".
2. На вказану пошту надсилається згенерований лист, який містить "кнопку", що відправить на сервер токен зі всією необхідною інформацією. Якщо все співпадає - створюєте в БД сутність юзера і відповідаєте йому про успішне підтвердженя

*/

module.exports.signIn = async (req, res, next) => {
  try {
    //   1. Прийняти інформацію юзера
    const {
      body: { email, password },
    } = req;
    //   2. Знайти юзера в БД за допомогою інфи, яка прийшла разом з запитом (напр, мейл)
    const foundUser = await User.findOne({
      email,
    });
    if (!foundUser) {
      //       - якщо такого юзера немає - відповідаємо помилкою (404/400)
      throw new Error("User not found"); // ось тут може бути ваша помилка
    }
    //   3. Якщо такий юзер є - перевіряємо правильність пароля
    // перевірити відповідність пароля можна за допомогою хешованої перевірки
    const result = await bcrypt.compare(password, foundUser.passwordHash);
    console.log(result); // result - true, якщо співпадають, false якщо ні
    //       - якщо пароль не співпав - відповідаємо помилкою (400)
    if (!result) {
      throw new Error("Invalid data");
    }
    console.log(foundUser);
    //   4. Якщо пароль співпав - створюємо сесію юзера і генеруємо для нього токен для всіх подальших запитів
    const tokens = await createTokenPair({
      userId: foundUser._id,
      email: foundUser.email,
    });
    // зберегти RT до БД
    const add = await RefreshToken.create({
      token: tokens.refreshToken,
      userId: foundUser._id,
    });

    res.status(200).send({ data: deletePassword(foundUser), tokens });
    //      Всі наступні (подальші) запити мають приходити з цим виданим токеном
    // на клієнті цей токен зберігається у localStorage
  } catch (error) {
    next(error);
  }
};

/*
Аутентифікація - юзер приходить з логіном та паролем і ми перевіряємо, чи дійсно він зареєстрований, чи підходить пароль

Авторизація - це підтвердження особистості юзера та його прав разом з кожним запитом ПІСЛЯ аутентифікації

Алгоритм аутентифікації:

1. Клієнт надсилає запит на якусь роботу.
Якщо його запит не містить авторизаційної інформації, юзер отримує помилку 401 (Unauthorized). Разом з цією помилкою юзер отримує в заголовці WWW-Authenticate потрібний метод аутентифікації

2. Клієнт надсилає новий запит, який вже містить інформацію для аутентифікації.
Дані перевіряються, і якщо юзер пройшов аутентифікацію, йому видається "довідка", що він аутентифікований.
Довідка = токен авторизація

3. Всі наступні запити на сервер відправляються разом з токеном. 
Токен перевіряється кожен раз, коли юзер приходить з запитом.

Токен має строк придатності (для того, щоби у випадку вкрадення зловмисник через певний час втратив доступ до авторизованого контенту)

Токени створюються сервером, підписуються секретним ключем і передаються клієнту, який надалі використовує цей токен для підтвердження своєї особи.


*/

module.exports.refreshSession = async (req, res, next) => {
  const {
    body: { refreshToken },
  } = req;
  // перевіряємо валідність refreshToken
  let verifyResult;
  try {
    verifyResult = await verifyRefreshToken(refreshToken);
  } catch (error) {
    next(new AuthError("Invalid refresh token"));
  }
  console.log(verifyResult);
  try {
    if (verifyResult) {
      const foundUser = await User.findOne({
        email: verifyResult.email,
      });
      console.log(foundUser);
      const rftFromDB = await RefreshToken.findOne({
        $and: [
          {
            token: refreshToken,
          },
          {
            userId: foundUser._id,
          },
        ],
      });

      if (rftFromDB) {
        // Видаляємо старий РТ з БД
        const removed = await rftFromDB.deleteOne();
        // Робимо нову пару токенів та відправляємо їх у відповідь
        const tokenPair = await createTokenPair({
          userId: foundUser._id,
          email: foundUser.email,
        });

        // новий РТ додаємо в БД
        const add = await RefreshToken.create({
          token: tokenPair.refreshToken,
          userId: foundUser._id,
        });
        res.status(200).send({ tokens: tokenPair });
      } else {
        // якщо токен такий в БД не знайшли - видаємо помилку
        // Якщо RT не підходить - відповідаємо 401 помилкою
        // Для обмеження кількості пристроїв, з яких можливо оновити сесію, RT має зберігатись в БД
        // При оновленні сесії він має замінюватись на наступний

        throw new AuthError("Token not found");
      }
    }
  } catch (error) {
    next(error);
  }
};
/*
Оновлення сесії

1. Якщо попередній запит прийшов з помилкою 403 - ми беремо з localStorage refreshToken і йдемо оновлювати сесію.
2.  Маємо перевірити, чи валідний refreshToken
- якщо так - оновлюємо сесію, видаємо нову пару токенів
- якщо ні - видаємо іншу помилку, 400, і змушуємо користувача логінитись заново
*/
