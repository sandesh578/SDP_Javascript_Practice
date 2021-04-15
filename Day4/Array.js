//Array can store elements of any type

let arr=["Sandesh",true,{age:20,roll:950},function(){console.log("JavaScript")}];

console.log(arr[2].roll);//950
console.log(arr[2].age);//20

arr[3]();//JavaScript

arr[4]=false;

//console.log(arr);

//Array can be used as queue data structure(FIFO)
//Insertion at last removal of first
let queue=["Sandesh","Sangam","Rakesh","Nischit"];
queue.push("Pratik");
queue.push("Srysty","Karishma");
queue.push("Sofia");
console.log(queue.length);
console.log(queue.shift());//removes first element Sandesh
console.log(queue.length);

console.log(queue);


//Array can also be used as stack data structure(LIFO)
//Insertion and removal from last
let stack=[1,5,7,9,11];
stack.push(15);
stack.push(18);
stack.push(22,34,40);//we can also push multiple elements at once
stack.push(45);
stack.push(81);
console.log(stack.length);
console.log(stack.pop());//removes top element 81
console.log(stack.pop());//removes 45
console.log(stack.length);

console.log(stack);


//Array can be used as deque
//Insertion and deletion  can be done from both sides
let deque=["Apple","HP","Dell","Smsung"];
deque.unshift("OnePlus","Lava");//multiple elements can be added at first
deque.push("Oppo");
deque.unshift("LG");//add elements at first
deque.push("Realme","Mi");
console.log(deque);
console.log(deque.shift());//removes first element
console.log(deque);
console.log(deque.pop());//removes last lement
console.log(deque);


//push and pop are faster than shift and unshift aas they dont require shift
