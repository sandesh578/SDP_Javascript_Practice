//unary operand
let x = 5;
x = -x;

console.log(x); //-5

//exponenetiation
let exp = 2 ** 3;
console.log(exp); //8


//string concatenation
let str = "Hello";
let string = str + " World";
console.log(string); //Hello World


let val = "1" + 2 + 3;
console.log(val); //123

console.log(6 - '2'); //4  //2 is converted to number

console.log('6' / '3'); //2 //both 6 and 3 is converted to number

console.log(+true); //1

let apples = "2";
let oranges = "5";

console.log(apples + oranges); //25

console.log(+apples + (+oranges)); //7


let p = 7;
let y = 2;

let z = 11 - (p = y + 1);

console.log(p); //3
console.log(z); //8

//chaining assignment operator
let a, b, c;

a = b = c = 2 + 9;

console.log(a); //11
console.log(b); //11
console.log(c); //11

//modify in place
let n = 5;
n = n * 5;
n = n - 2;

console.log(n); //23


//increment
let m = 56;
--m; //pre increment
m++; //post increment

console.log(m); //56


//comma operator
let o = (1 + 3, 7 + 3);
console.log(o); //10 //returns last result

let r = (8 + 2, 2 - 1);
console.log(r); //1