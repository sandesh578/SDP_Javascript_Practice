//Create a function that returns the mean of all digits.

function mean(num)
{
    let sum=0;
    let count=0;

    while(num>=1)
    {
        sum+=(num%10);
        count++;
        num=num/10;
    }
    return Math.floor(sum/count);
}

console.log(mean(42));//3

console.log(mean(12345));// 3

console.log(mean(666));// 6