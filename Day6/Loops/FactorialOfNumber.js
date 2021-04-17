
function factorize(num)
{
    let arr=[];
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            arr.push(i);
        }
    }
    return arr;
}

console.log(factorize(12));// [1, 2, 3, 4, 6, 12]

console.log(factorize(4));// [1, 2, 4]

console.log(factorize(17));// [1, 17]