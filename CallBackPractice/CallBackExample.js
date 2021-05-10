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
    console.log("Array is sorted on basis of age.");
    console.log(array);
}

//Here its working asynchronously.
function print(obj,callback)
{
   setTimeout(()=>{
    arr.push(obj);
    callback(arr);
   },2000);
   console.log(arr);
   console.log("Task completed successfully");
}
print({name:"Sofia Khadka",age:16},sortByAge);

/*
Output
[
  { name: 'Sandesh Parajuli', age: 20 },
  { name: 'Sangam Giri', age: 21 },
  { name: 'Nischit Pudasaini', age: 23 },
  { name: 'Prakash Shah', age: 18 },
  { name: 'Pratik Gupta', age: 25 }
]
Task completed successfully
Array is sorted on basis of age.
[
  { name: 'Sofia Khadka', age: 16 },
  { name: 'Prakash Shah', age: 18 },
  { name: 'Sandesh Parajuli', age: 20 },
  { name: 'Sangam Giri', age: 21 },
  { name: 'Nischit Pudasaini', age: 23 },
  { name: 'Pratik Gupta', age: 25 }
]
*/


 