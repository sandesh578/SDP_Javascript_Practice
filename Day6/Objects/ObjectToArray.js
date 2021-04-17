/*Write a function that converts an object into an array, 
where each element represents a key-value pair in the form of an array.
*/

function toArray(obj)
{
   let arr1=Object.entries(obj);
   return arr1;
}

console.log(toArray({ a: 1, b: 2 }));//[["a", 1], ["b", 2]]

console.log(toArray({ shrimp: 15, tots: 12 }));//[["shrimp", 15], ["tots", 12]]

console.log(toArray({}));//[]