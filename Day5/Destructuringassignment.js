//Destructuring helps to assign array values to variables
let names=["Albenero","Sandesh","Sangam"];

let [name1,name2,name3]=names;

console.log(name1);//Albenero
console.log(name3);//Sangam


//split
let [firstName, surName] = "Sandesh Parajuli".split(' ');
console.log(firstName);//Sandesh
console.log(surName);//Parajuli

//This is the shorter way to assign to variable
let arr=["John","Cena"]
// let firstName = arr[0];
// let surname = arr[1];
let [first, surname] = arr;

//we can also ignore using commas
let [firstname, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log( title );//Consul


//Works with any iterable i.e string,array
let [a, b, c] = "abc";
console.log(a+" "+b+" "+c);//a b c

let [one, two, three] = new Set([1, 2, 3]);
console.log(one+" "+two+" "+three);//1 2 3

//Using in objects
let user = {};
[user.name, user.surname] = "Mark-Henry".split('-');

console.log(user.name); //Mark
console.log(user.surname); //Henry


//Looping with .entries()
let user1 = {
    name: "Abdul",
    age: 30
  };
  
  // looping over keys-and-values
 for(let [key,value] of Object.entries(user1))
 {
     console.log(`${key}:${value}`);
 }

 //swapping variable
 let num1=67;
 let num2=987;

[num1,num2]=[num2,num1];
console.log(`num1:${num1} num2:${num2}`);//num1:987 num2:67


//The rest ‘…’-three dots are used
let [namex, namey, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

//rest is array of items, starting from the 3rd one
console.log(rest[0]); //Consul
console.log(rest[1]); //of the Roman Republic
console.log(rest.length); //2


//Default values are undefined
let [start, last] = [];

console.log(start); //undefined
console.log(last); //undefined

//can also replace missing values  with deafult values
let [x=7,y=44,z=90]=[67];
console.log(x+" "+y+" "+z);//67 44 90