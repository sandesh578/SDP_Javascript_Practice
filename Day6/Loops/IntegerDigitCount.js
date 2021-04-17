//Create a function that counts the integer's number of digits.

function countDigits(num)
{
    let count=0;
    if(num>0)
    {
       while(num>=1)
       {
        count=count+1;
        num=num/10;
       }
    }
    else
    {
        count=num.toString().length-1;
    }
    return count;
}

console.log(countDigits(318));//3

console.log(countDigits(-92563));//5

console.log(countDigits(4666));//4

console.log(countDigits(-314890));//6

console.log(countDigits(654321));//6

console.log(countDigits(638476));//6

