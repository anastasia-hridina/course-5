/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// Мінімум

// Напиши всі можливі варіанти створення функцій.
function name(parameter1, parameter2) {}
; // Function Declaration
var func = function func() {}; // Function Expression
var arrow = function arrow(arg1, arg2, arg3, argN) {
  return expression;
}; // Arrow Function

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function param() {
  console.log(arguments.length);
}
param(12, 6, 45);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function diff(a, b) {
  var result;
  if (a < b) {
    result = -1;
  } else if (a > b) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
}
console.log(diff(2, 3));
console.log(diff(5, 1));
console.log(diff(7, 7));

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(6));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
/******/ })()
;
//# sourceMappingURL=script.js.map