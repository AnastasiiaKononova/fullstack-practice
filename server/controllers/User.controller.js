const {User} = require("../models");
const {deletePassword} = require('../utils/deletePassword');

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

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body); // за потреби можемо вручну перераховувати поля, які передаємо в об'єкті на створення юзера
    const readyUser = deletePassword(createdUser);
    // перед тим, як повертати юзера, треба з об'єкта видалити пароль
    res.status(201).send({ data: readyUser});
  } catch (error) {
    next(error);
  }
};
