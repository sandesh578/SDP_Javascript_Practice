/*A factor chain is an array where each previous element is a factor of the next consecutive element.
 The following is a factor chain:*/

 function factorChain(arr)
 {
     for(let i=arr.length-1;i>=0;i--)
     {
        for(let j=0;j<=i;j++)
        {
            if(arr[i]%arr[j]!=0)
            {
                return false;
            }
        }
     }
     return true;
 }

console.log(factorChain([1, 2, 4, 8, 16, 32]));//true

console.log(factorChain([1, 1, 1, 1, 1, 1]));// true

console.log(factorChain([2, 4, 6, 7, 12]));// false

console.log(factorChain([10, 1]));// false