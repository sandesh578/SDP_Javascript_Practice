//Create a function which returns the number of true values there are in an array.
function countTrue(arr)
{
    let count=0;
    for(let bool of arr)
    {
        if(bool==true)
        {
            count++;
        }
    }
    return count;
}

console.log(countTrue([true, false, false, true, false]));//2

console.log(countTrue([false, false, false, false]));//0

console.log(countTrue([]));//0