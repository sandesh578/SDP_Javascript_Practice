let user={
    name:"Sandesh Parajuli",
    age:20
};

let descriptor=Object.getOwnPropertyDescriptor(user,'name');//get full info about property including  flags

console.log(JSON.stringify(descriptor,null,2));//2 is space
/*
Output:
{
  "value": "Sandesh Parajuli",
  "writable": true,//if true can be modifies
  "enumerable": true,// if true can be listed in loops
  "configurable": true//if true can be deleted and modified
}
*/


//flages value of property can also be changed
let user1={};

Object.defineProperty(user1, "name", {
    value: "Henry"
  });//if property is not present it will create that property 

let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');

console.log(JSON.stringify(descriptor1,null,2));
/*
Output
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

let info={
    university:"KIIT",
    branch:'cse'
}
Object.defineProperty(info, "university", {
    writable: false
  });//modifying the flag writable property to false


  info.university="IIT";//does not show error in non strict mode but operation wont succeed

  console.log(info.university);//KIIT not modidified as writable flag is false 

  //Object.defineProperties allows to define multiple properties at once
  let user3={};

  Object.defineProperties(user3, {
    name: { value: "John", writable: false },
    age: { value: 20, writable: false },
  });

console.log(user3.name);//John

//Object.defineProperties and getOwnPropertyDescriptors allows to clone object with flags too
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user3));

console.log(clone.name);//John

let descript=Object.getOwnPropertyDescriptors(clone);

console.log(descript);
/*Output
{
  name: {
    value: 'John',
    writable: false,
    enumerable: false,
    configurable: false
  },
  age: {
    value: 20,
    writable: false,
    enumerable: false,
    configurable: false
  }
}
*/

