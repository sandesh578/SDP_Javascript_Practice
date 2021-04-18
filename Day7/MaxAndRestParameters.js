//...args must be at last parameter
function sum(...args)
{
    let total=0
    for(let i=0;i<args.length;i++)
    {
        total+=args[i];
    }
    return total;
}

console.log(sum(1,2,3,4,5,6,7,8,9));//45

//Arrow function do not have arguments object so takes from outer function
function display() {
    let showArg = () => arguments[0];
    return showArg();
  }
  
console.log(display(67)); //67


//Math.max() expects list of number not array
//but array can be passed this way 
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1,34,...arr2,105,45));//105


//Spread Syntax can also be used to merge array
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3,2,...arr4];

console.log(merged); //[0, 3, 5,  1, 2, 8, 9, 15 ]

//Spread syntacx cal also be used to convert  string to array
let str="Sandesh";

let strArr=[...str];

console.log(strArr);//[ 'S', 'a', 'n', 'd', 'e', 's', 'h' ]

//Array.from converts iterable into array
let str1="Albanero";

console.log(Array.from(str1));