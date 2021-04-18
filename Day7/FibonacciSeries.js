
//uisng recursion
function fibonacci(n)
{
   if(n<=1)
   {
     return n;
   }
   else
   {
       return fibonacci(n-1)+fibonacci(n-2);
   }
}

console.log(fibonacci(9));//34 //fibonacci element at pos 9

//fibonacci element using iteration
function fib(n) {
    let x=1;
    let y=1;
    let z;
    for (let i=3;i<=n;i++) {
      z=x+y;
      x=y;
      y=z;
    }
    return y;
  }
  
console.log(fib(3));//2


//fibonacci series using iteration

function fibonacciSeries(n)
{
   let arr=[];
   arr[0]=1;
   arr[1]=1;
   for(let i=2;i<n;i++)
   {
       arr[i]=arr[i-1]+arr[i-2];
   }
   return arr;
}

console.log(fibonacciSeries(5));//[ 1, 1, 2, 3, 5 ]