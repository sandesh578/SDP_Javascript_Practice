
let sum = new Function('a', 'b', 'return a + b');// basic syntax

console.log(sum(1, 2));//3

let sum1=new Function('a,b', 'return a + b'); // comma-separated

console.log(sum1(1, 2));//3

let sum2=new Function('a , b', 'return a + b'); // comma-separated with spaces

console.log(sum2(1, 2));//3

//sum1,sum2 and sum3 means same-new Function parementers can be assigned in any way

//function with parameters
let pro=new Function('x','return Math.pow(x,2)');

console.log(pro(5));//25

//function without arguments
let sayHi = new Function('console.log("Hello")');

sayHi();//Hello

//new Function allows to turn any string to function


//closure
function getFunc() {
    let value = "Sandesh Parajuli";
  
    let func = function() { console.log(value); };
  
    return func;
  }

  getFunc()();//Sandesh Parajuli