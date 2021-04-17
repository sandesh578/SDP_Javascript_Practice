/*Create a function that takes two numbers as arguments (num, length) and returns 
an array of multiples of num until the array length reaches length.*/

function multiples(num,length)
{
    let arr=[];
    let j=0;
    for(let i=1;i<=length;i++)
    {
      arr[j]=num*i;
      j++;
    }
   return arr;
}

let arrayOfMultiples=multiples(7,5);
console.log(arrayOfMultiples);//[ 7, 14, 21, 28, 35 ]

let arrayOfMultiples1=multiples(12,10);
console.log(arrayOfMultiples1);//[ 12, 24, 36,  48,  60, 72, 84, 96, 108, 120 ]

let arrayOfMultiples2=multiples(17,6);
console.log(arrayOfMultiples2);//[ 17, 34, 51, 68, 85, 102 ]
