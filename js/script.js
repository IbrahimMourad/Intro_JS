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
console.log('======================\n');
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

var count = 0;

while (count < 10) {
  console.log('while', count);
  count += 2;
}
console.log('================');
do {
  console.log('do while', count);
  count += 2;
} while (count < 20);
console.log('================');

for (var i = 20; i < 30; ) {
  console.log('for loop', i);
  i += 2;
}
