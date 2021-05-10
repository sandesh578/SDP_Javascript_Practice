let arr=[{
    name:"Sandesh Parajuli",
    age:20
    },
    {
     name:"Sangam Giri",
     age:21
    },
    {
    name:"Nischit Pudasaini",
    age:23
    },
    {
    name:"Prakash Shah",
    age:18
    },
    {
    name:"Pratik Gupta",
    age:25
}];

function sortByAge(array)
{
    array.sort((a,b)=>a.age-b.age);
    console.log("Array is sorted on basis of age");
}

//Here its working synchronously
function print(array,sortByAge)
{
   array.push({name:"Sofia Khadka",age:16});
   sortByAge(array);
   console.log(array);
   console.log("Task completed successfully");
}
print(arr,sortByAge);

/*Output
Array is sorted on basis of age
[
  { name: 'Sofia Khadka', age: 16 },
  { name: 'Prakash Shah', age: 18 },
  { name: 'Sandesh Parajuli', age: 20 },
  { name: 'Sangam Giri', age: 21 },
  { name: 'Nischit Pudasaini', age: 23 },
  { name: 'Pratik Gupta', age: 25 }
]
Task completed successfully
*/


 