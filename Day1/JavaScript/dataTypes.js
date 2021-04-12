//JavaScript is dynamically types

let message = "Hello"; //string
message = 354224; //no error
console.log(message);

console.log(1 / 0); //Infinity

console.log(Infinity); //Infinity

console.log("not a number" / 23); //Nan(Not a Number)

//BigInt is supported in Firefox,Chrome,Edge,Safari but not in IE
//const bigInt = 23412312n; //ends with n


let taskDone = true; //boolean

console.log(taskDone); //true


let isGreater = 5 > 9;
console.log(isGreater); //false

let age = null;
console.log(age); //null

let name;
console.log(name); //undefined


console.log(typeof("Sandesh"));

console.log(typeof(null)); //object

console.log(typeof(Infinity)); //number

console.log(typeof(Math)); //object

console.log(typeof(true)); //boolean

console.log(typeof(45.90)); //number

console.log(typeof(Symbol("id")));