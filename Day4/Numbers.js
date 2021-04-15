console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true


function randomInteger(min,max)
{
    let n=Math.random()*(max-min)+min;
    return n;
}

console.log(randomInteger(1,5));



let billion=1e9;
console.log(billion);//1000000000


let ms=1e-6;
console.log(ms);//0.000001

console.log(0xff);//255
console.log(0xFF);//255 //case doesnot matter


let a=0b11111111;//binary
let b=0o377;//octal
console.log(a==b);//true

let num=255;
console.log(num.toString(16));//ff //16 base
console.log(num.toString(8));//377
console.log(num.toString(36));//73
console.log(num.toString(2));//11111111

//if we want to call a method directly on a number we use two dot
console.log(123456..toString(36));//2n9c


let n=0.3;
console.log(n);//0.3
console.log(n.toFixed(3));//0.300 //precision 3


console.log(isNaN(NaN));//true
console.log(isNaN("Sandesh"));//true
console.log(isFinite(12e2346778));//false