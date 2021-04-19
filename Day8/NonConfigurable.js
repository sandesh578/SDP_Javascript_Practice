//Math.PI is non configurable,non writable,non enumerable by deaflt
let descriptor = Object.getOwnPropertyDescriptor(Math,'PI');//object is classs and property is class

console.log(JSON.stringify(descriptor,null,2));
/*
Output
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

//configurable: false/non configurable prevents changes of property flags and its deletion,but value can be changed
let user = {
    name: "Sandesh"
  };
  
  Object.defineProperty(user, "name", {
    configurable: false
  });
  
  user.name = "Albanero";
  delete user.name;//does not works

  console.log(user.name);//Albanero //property value is changed but is not deleted

  let user1 = {
    age:20
  };
  
  Object.defineProperty(user1, "age", {
    writable: false,
    configurable: false
  });
  
  user1.age=25;//does not work as flag writable is false
  delete user1.age;//does not works

  console.log(user1.age);//20