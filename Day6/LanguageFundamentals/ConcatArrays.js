//Create a function that concatenates n input arrays, where n is variable.

function Concat(...arguments)
{
   let arr=new Array();
   for(let i=0;i<arguments.length;i++)
   {
      arr.push(arguments[i]); 
   }

   return arr.reduce((arr1, val) => {
      return arr1.concat(...val);
   }, []);
}

console.log(Concat([1, 2, 3], [4, 5], [6, 7]));//[1, 2, 3, 4, 5, 6, 7]

console.log(Concat([1], [2], [3], [4], [5], [6], [7]));// [1, 2, 3, 4, 5, 6, 7]

console.log(Concat([1, 2], [3, 4]));// [1, 2, 3, 4]

console.log(Concat([4, 4, 4, 4, 4]));// ➞ [4, 4, 4, 4, 4]
