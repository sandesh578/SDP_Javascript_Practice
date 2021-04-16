//WeakMap must contain objects as key
//There are no iterators in WeakSet and WeakMap
let name1={name:"Sandesh Parajuli"};
let name2={name:"Sangam Giri"};
let name3={name:"Amrita Singh"};

let weakMap=new WeakMap();
weakMap.set(name1,1);
weakMap.set(name2,2);
weakMap.set(name3,3);
//weakSet.delete(name3);

console.log(weakMap);
console.log(weakMap.has(name2));//true
console.log(weakMap.has(name3));//true


//WeakSet must contain objects as valus

let weakSet=new WeakSet();
weakSet.add(name1);
weakSet.add(name2);
weakSet.add(name3);
weakSet.add(name3);//it wont be added aas repetition is not allowed
weakSet.delete(name3);

console.log(weakSet);//WeakSet { <items unknown> } objects are cleared from memory
console.log(weakSet.has(name3));//false


//task1
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  //to Store "unread" flags we can use WeakSet
  let readMessages = new WeakSet();

  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  // readMessages has 2 elements
  
 //when we again read first message still read message has two unique values
  readMessages.add(messages[0]);
  console.log("Read message 0: " + readMessages.has(messages[0])); //true
  
  //messages.shift();//removes message from first

 /* // the symbolic property can be used for unique identification
  //Symbol is only known to our code third-party code probably won’t see our extra property
   let isRead = Symbol("isRead");
    messages[0][isRead] = true;
*/

  //task2
  //to store read date we can use weakMap
  let readMap = new WeakMap();
  
  readMap.set(messages[0], new Date(2017, 1, 1));
  readMap.set(messages[1], new Date(2017, 1, 5));
  readMap.set(messages[2], new Date(2017, 1, 9));

  console.log(readMap.has(messages[0]));//true
