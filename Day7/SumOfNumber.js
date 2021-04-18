
//using recursion
function sumTo(num)
{
    if(num==1)
    {
        return 1;
    }
    else
    {
        return num+sumTo(num-1);
    }
}

console.log(sumTo(100));//5050
console.log(sumTo(150));//11325

//using iteration

function sumOfNumbers(n)
{
    let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}

console.log(sumOfNumbers(100));//5050
