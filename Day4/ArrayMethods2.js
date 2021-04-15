//concat
let arr=[1,2,3];
console.log(arr.concat([4,5,6],[7,8,9],10));//add all elements to an array
//prints from 1 to 10

let arr1 = [1, 2];
let arrayLike = {
  0: "Hello",
  1: "World",
  [Symbol.isConcatSpreadable]:true,//array like objects has this property
  length: 2
};
console.log(arr.concat(arrayLike)); //[ 1, 2, 3, 'Hello', 'World' ]


//iterator-forEach
let arr2=["Apple","Oranges","Cherry"];
arr2.forEach((item, index) => {
    console.log(`${item} is at index ${index}`);
});

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });


  //Searching in array
  let arr4=[1,2,3,true,4,"Sandesh",1,6];
  console.log(arr4.indexOf(2));//1
  console.log(arr4.indexOf(true));//3
  console.log(arr4.indexOf("Sandesh"));//5
  console.log(arr4.indexOf(null));//-1
  console.log(arr4.lastIndexOf(1));//6
  console.log(arr4.includes(4));//true
  

  //findmethod
  //returns item if found otherwise undefined is returned
  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  let user = users.find(item => item.id == 3);
  console.log(user.name);//Mary


  //findIndex
  //returns index of element if found otherwise returns -1
  let users1 = [
    {id: 1, name: "Henry"},
    {id: 2, name: "Peter"},
    {id: 3, name: "Sofi"}
  ];
  console.log(users1.findIndex(item=> item.id == 2));//1


  //filter
  //returns array of matching elements
  let users2 = [
    {id: 1, name: "Henry"},
    {id: 2, name: "Peter"},
    {id: 3, name: "Sofi"},
    {id: 4, name: "Sandy"},
    {id: 5, name: "Karishma"}
  ];

  let userArr=users2.filter(item=>item.id<4);
  console.log(userArr);