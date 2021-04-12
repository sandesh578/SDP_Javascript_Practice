// let admin, name;

// name = "John";
// admin = name;

//alert(admin);

let ourPlanet = "earth";
let currentVisitor = "Sandesh";

console.log("Our planet is: " + ourPlanet + "\nCurrent Visitor is: " + currentVisitor);


let name = "Ilya";
console.log(`hello ${1}`); //hello  1 
console.log(`hello ${"name"}`); //hello name

console.log(`hello ${name}`); //hello Ilya


let a = 1,
    b = 1;

let c = ++a; // 2
let d = b++; // 1

console.log(c);
console.log(d);


let s = 2;
let x = 1 + (s *= 2); //5
console.log(x);

console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log("  -9  " + 5); //  -9  5
console.log("  -9  " - 5); //-14
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(" \t \n" - 2); //-2


console.log(5 > 4); //true
console.log("apple" > "pineapple"); //false
console.log("2" > "12"); //true
console.log(undefined == null); //true  
console.log(undefined === null); //fasle
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false

console.log(0 === false); //false //types are different

console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true