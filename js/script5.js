"use strict";

console.log ('arr' + " - object");
console.log (4 + ' - object');
console.log (4 + +' - object');
console.log (4 + +'5');

let incr = 10,
    decr = 10;

// incr++;         // инкремент постфиксная форма записи
// decr--;

// ++incr;            // 
// --decr;            // декримент префиксная форма записи

// console.log (incr);
// console.log (decr);

// console.log (incr++);
// console.log (decr--);

console.log (++incr);
console.log (--decr);

console.log (5%2);

console.log (2*4 == 8); // сравнение только по значению true
console.log (2*4 == '8'); // сравнение только по значению true
console.log (2*4 === '8'); // строгое сравнение по типу данных false
console.log (2*4 === 8); // строгое сравнение по типу данных true

// && // оператор и - и это правда и это правда
// || // оператор или - или это правда или это правда

const isChecked = true,
      isClose = true,
      isClose1 = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose1);

const isChecked2 = false,
      isClose2 = false;

      // ! оператор отрицания - оброщает значение в обратное

      console.log ( isChecked2 || !isClose2);

      console.log (2 + 2 * 2 === 8);

      // != оператор не равен
      // !== оператор не равен, строгое сравнение по типу

      console.log (2 + 2 * 2 != '6'); // false
      console.log (2 + 2 * 2 !== '6'); // true

