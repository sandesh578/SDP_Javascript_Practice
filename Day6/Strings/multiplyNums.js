//Given a string of numbers separated by a comma and space, return the product of the numbers.

function multiplyNums(str)
{
   let arr=str.split(", ");
   let mul=1;
   for(let num of arr)
   {
     mul=mul*num;
   }
   return mul;
}

console.log(multiplyNums("2, 3"));//6

console.log(multiplyNums("1, 2, 3, 4"));//24

console.log(multiplyNums("54, 75, 453, 0"));// 0

console.log(multiplyNums("10, -2"));//-20