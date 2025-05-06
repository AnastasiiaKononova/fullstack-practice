/*
 Ітератор - об'єкт, який реалізує принцип перебору колекції або об'єкту
 
 
 [Symbol.iterator] - назва зарезервованого поля в об'єкті, де лежить метод, що повертає об'єкт ітератора.
 На існування [Symbol.iterator] покладаються оператори, які працюють з ітерованими колекціями (iterable-об'єктами)
 
 
 */
// const o = {
//     [Symbol.iterator]: function() {
//         return {
//             next: () => ({
//                 value: "значення, яке ми повертаємо",
//                 done: "чи закінчився перебір об'єкту, або нам ще є куди іти"
//             })
//         }
//     }
// }

// [1, 2, 3, 4, 5]

/*
 Якщо у об'єкта є метод за адресою [Symbol.iterator] - цей об'єкт є iterable 
 */

// Генератор - це особливий вид функцій в js
// Це функції, які здатні призупиняти свою роботу на певному місці,
//повертати проміжний результат дії і очікувати на наступний виклик, відновлювати роботу з того самого місця і отримувати нові вхідні дані при цьому.

// function sum(a, b) {
//   // звичайна функція - вхідні параметри
//   const res = a + b; // виконання роботи
//   return res; // повернення результату
// }

sum(2, 4); // виклик функції змушує код відпрацювати і повернути в це саме місце результат виконання функції

function* generate(params) {
  const a = 1;
  console.log("console 1"); // виконуємо роботу
  yield 7;
  // a все ще існує
  console.log("console 2");
  yield 8;
  console.log("console 3");
  yield 9;
  console.log("console 4");
  return 10;
}

// const gen = generate(); // Повертає об'єкт генератора, що має метод next()
// const res1 = gen.next(); // Повертає об'єкт з value та done
// console.log(res1);
// const res2 = gen.next();
// console.log(res2);
// const res3 = gen.next();
// console.log(res3);
// const res4 = gen.next();
// console.log(res4);

/*
 return - функція завершується назовсім, значення повертається як результат обчислень
 yield - функція призупиняється, повертає проміжний результат і очікує на новий виклик
 
  */

// const arr = [...generate()];
// console.log(arr);

/// Задача: послідовність чисел від 0 до Infinity

function* generateNumberSequence() {
  let store = 0;
  while (true) {
    yield ++store;
  }
}

// const numSeq = generateNumberSequence();
//  const r1 = numSeq.next();
//  console.log(r1);
//  const r2 = numSeq.next();
//  console.log(r2);
//  const r3 = numSeq.next();
//  console.log(r3);
//  const r4 = numSeq.next();
//  console.log(r4);
//  const r5 = numSeq.next();
//  console.log(r5);

function* retGen() {
  return 1;
}

// const gen1 = retGen();
// const r11 = gen1.next();
// console.log(r11);
// const r12 = gen1.next();
// console.log(r12);

/*
Написати функцію-генератор, яка повертає послідовність від 1 до 20 і перевірити її роботу, розібравши значення в масив 

*/

function* oneToTwentySeq() {
    let a = 1;
    while (a <= 20) {
        yield a++
    }
}


//  const genSeq = oneToTwentySeq();
//  const a1 = genSeq.next();
//  console.log(a1);
//  const arr = [...genSeq];
//  console.log(arr);
 
 
 //// Призупинка і нові вхідні дані

 function* genValues(param1){
    console.log(param1);
    const param2 = yield param1*param1; // yield на цьому місці поверне попереднє значення і буде чекати на наступний виклик. Наступний виклик (next()) принесе нам нові вхідні дані, які повернуться на місце попередньго yield
    console.log(param2);
    yield param1*param2;
 }

//  const gen1 = genValues(4);
//  const r1 = gen1.next();
//  console.log(r1);
//  const r2 = gen1.next(5);
//  console.log(r2);
 
// Делегування генераторів

function* gen1 () {
    yield 1;
    yield 2;
    yield* delegate();
    yield 5;

}

function* delegate() {
    yield 3;
    yield 4;
}

// for (const iter of gen1()) {
//     console.log(iter)
// }

const gener = gen1();
const m1 = gener.next();
console.log(m1);
const m2 = gener.next();
console.log(m2);
const m3 = gener.next();
console.log(m3);
const m4 = gener.next();
console.log(m4);
const m5 = gener.next();
console.log(m5);

/////// Reducer to object
 
 
const sum = (a, b) => a+b;
 
const sub = (a, b) => a-b;

const multy = (a, b) => a*b;

const div = (a, b) => a/b;


function calculator1(a, b, operator) {
    // switch(operator) {
    //     case 'sum': return sum(a,b);
    //     case 'sub': return sub(a,b);
    //     case 'multy': return multy;
    //     case 'div': return div(a,b);
    // }


    calculator[operator](a,b);
}


const calculator = {
    '+': sum,
    '-': sub,
    '*': multy,
    '/': div
}