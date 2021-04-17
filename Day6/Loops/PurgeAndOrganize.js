/*Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
*/
function uniqueSort(arr)
{
   arr.sort();
   let set=new Set();
   for(let n of arr)
   {
       set.add(n);
   }
   return Array.from(set);
}

console.log(uniqueSort([1, 2, 4, 3]));// [1, 2, 3, 4]

console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));// [1, 2, 3, 4]

console.log(uniqueSort([6, 7, 3, 2, 1]));// [1, 2, 3, 6, 7]