/* 
-boolean (true or false)
-number (including integers like 1, -2, and floating point numbers like 3.14, 2e-3)
-string ( Strings are used for storing text. Strings must be inside of either double or single quotes.)
-null (null has one value: null. It is explicitly nothing.)
-undefined (A variable that has no value is undefined)
-Object
-Array
*/

/* var num1 = 24;
var num2 = 7;
var sum = num1 % num2;
 */
/* 
    5/2 = 2.5
*/
// console.log(`${num1} % ${num2} = ${sum}`);

/* 
    varibale
    1- declaration
    2- initialization
*/

// NaN
// console.log('======================\n');
// console.log('test' - 0);
// console.log('Some random string' * 2);

// Infinity
// console.log(123 / 0);
// console.log(Infinity * Infinity);
// console.log(1e309);

/* 
 ++ |  --
*/

// var a = 5; // assigned a value of 5 to a
// var b = a; // assigned a (value of 5) to b, now b has a value of 5
// var c = a + (b * 2) / 4; // assigned b (value of 5) to c, now c has a     wewew  we ww e ew     wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvw           we        of 5
// console.log(c); // prints 5
// /* => we dragged the value of 5 from a all the way to c,
// through a series of //assignments (using the assignment operator “=”)*/

// const arr = [1, 2, 3, 4];

// console.log(!!NaN == !!undefined && 6 >= !!Infinity)

// console.log(!!NaN == !!undefined); // false
// // console.log(!!undefined); // false
// // console.log(Boolean(Infinity)); // false

// var x = 1; // x is truthy
// var y = 0; // y is falsey
// var z = null; // z is falsey
// console.log(x && y); // prints 0
// console.log(z && y); // prints null
// console.log(z || x); // prints 1
// console.log(y || z); // prints null

/* 
Logical AND (&&)	a && b	Returns the first value if falsy, otherwise returns the second value whatever it may be.
Logical OR (||)	a || b	Returns the first value if truthy, otherwise returns the second value whatever it may be.
*/

/* var count = 0;

while (count < 10) {
  console.log('while ', count);
  count += 3;
}

// console.log('================');
count = 10;

do {
  console.log('do while ' + count);
  count += 1;
} while (count < 10);
console.log('================');
 */
// ========================

// 1. break - continue

/*var  sum = 0;
for (var i = 1; i <= 5; i++) {
  console.log(i);
  if (i % 2 == 0) break;
  sum += i;
}
console.log({ sum });
 */

// const arr = [1, 32, 223, 223, 223, 223];

// var result = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === 223) {
//     result += 1;
//   }
// }
// console.log(result);
// =============================================

// 2. object
// const obj = {
//   name: 'ibrahim',
//   age: 30,
//   phone: [+20, 10111],
//   address: 'Egypt',
//   'is-Admin': true,
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function removeNum(array, target) {
//   let idx = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       idx = i;
//     }
//   }

//   console.log('target index:', idx);
//   console.log('target value:', array[idx]);
//   array.splice(idx, 1);
//   return array;
// // }
// console.log(removeNum(arr, 1));

// var removeNum = function (array, target) {
//   var result = arr.filter(function (el) {
//     if (el !== target) {
//       return el;
//     }
//   });
//   console.log(result);
// };

// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;

// var sum = a+b;
// var sum2 = b+c;
// var sum3 = c+d;

// function multiply(a, b) {
//   return a * b;
// }
// // console.log(add(5, 2)); // prints 7

// var sum = multiply(a, b);
// // var sum2 = multiply(b, c);
// // var sum3 = multiply(c, d);

// console.log({ sum });

// // Classic function
// // function welcomeUser(name) {
// //   console.log('hi' + ' ' + name);
// // }

// // welcomeUser('akram');

// // var welcomeUser = function (test = 'User') {
// //   console.log('hi' + ' ' + test);
// // };
// // // welcomeUser();
// // // welcomeUser('akram');

/* 
  red = 1
  blue = 2
  green = 3 
  yellow = 4

*/
/* 
function checkCode(a, b) {
    if (code === 1) {
    console.log('Red');
  }
  if (code === 2) {
    console.log('Blue');
  }
  if (code === 3) {
    console.log('Green');
  }
  if (code === 4) {
    console.log('Yellow');
  }
  if (code === 2) {
    console.log('second time run');
  }


  if ((a === 1 || a === 3) && (b === 1 || b === 3)) {
    console.log(a + ' ' + b);
  } else {
    console.log('Not 1 or 3');
  }
}
checkCode(1, 4);
  */
// function checkCode2(code) {
//   if (code === 1) {
//     console.log('Red');
//   } else if (code === 2) {
//     console.log('Blue');
//   } else if (code === 3) {
//     console.log('Green');
//   } else if (code === 4) {
//     console.log('Yellow');
//   } else if (code === 2) {
//     console.log('second time run');
//   }
// }

// checkCode2(2);

var arr = [
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
];

var obj = {
  name: 'ibrahim',
  age: 15,
  'email address': 'hi@example.com',
};

// console.log(numbers.name);
// console.log(numbers['email address']);

var objKeys = Object.entries(obj);

console.log(obj);
console.log(objKeys);

// const rere = [
//   ['name', 'hi'],
//   ['age', 15],
//   ['email address', 'hi@example.com'],
// ];

// name is ibrahim
// age is 15
// email address is hi@example.com
