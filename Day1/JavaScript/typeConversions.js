//string conversion
let value = true;
console.log(typeof(value)); //boolean

let string = String(value); //boolean converted to string
console.log(typeof(string)); //string

let str = "123";
console.log(typeof(str)); //string

//Numeric Conversion
let num = Number(str); //converted to number
console.log(typeof(num)); //number


let name;
console.log(name);
//undefined converted to number
console.log(Number(name)); //NaN

//null numeric value is 0
console.log(Number(null)); //0

console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(Number("Hello ")); //NaN(Not a number)


//Boolean Conversion

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(134)); //true
console.log(Boolean(" ")); //true  //spaces is also treated true
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean("Hello")); //true
console.log(Boolean(NaN)); //false