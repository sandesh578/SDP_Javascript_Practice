//var addFunction = require('./operations.js');

//var functionObjects = require('./operations.js');

var { add, subtract } = require('./operations');

function greet(name) {
    console.log("Hello " + name + "!");
}

greet("Sandesh Parajuli");

var a = 10;
var b = 6;

//addFunction(a,b)
//functionObjects.subtract(a, b)

console.log("Sum of " + a + " and " + b + " is:" + add(a, b));

console.log("Difference of " + a + " and " + b + " is:" + subtract(a, b));

/*
Output:

Hello Sandesh Parajuli!
Sum of 10 and 6 is:16
Difference of 10 and 6 is:4

*/