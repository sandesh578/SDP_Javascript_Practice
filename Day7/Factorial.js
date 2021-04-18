//using recursion
function factorial(n)
{
   if(n==0)
   {
       return 1;
   }
   else
   {
       return n*factorial(n-1);
   }
}

console.log(factorial(5));//120


//using iteration
function factorials(n)
{
   let fact=1;
   for(let i=n;i>0;i--)
   {
       fact*=i;
   }
   return fact;
}

console.log(factorials(5));//120
