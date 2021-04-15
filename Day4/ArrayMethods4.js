//split-returns array
let places="New Delhi,Bhuwaneshwor,Gwalior,Mumbai,Telengana";

let arr=places.split(',');//each part is splitted where , is encountered and stored in array
console.log(arr);

let arr1 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arr1);//[ 'Bilbo', 'Gandalf' ]

let name="Sandesh";
console.log(name.split(''));//['S', 'a', 'n','d', 'e', 's','h']

//join-reverse of split
//returns string
let placeNames=["Delhi","Mumbai","Pune"];
console.log(placeNames.join(':'));//Delhi:Mumbai:Pune

//reduce
let arr2=[1,2,3,4,5,6];

let res=arr2.reduce((sum,current)=>sum+current,0);
console.log(res);//21


let arr3 = [1, 2, 3, 4, 5];
let result = arr3.reduce((sum, current) => sum + current);
//if no initial value is provides current becomes starting value of array and starts iterating from second
console.log(result); // 15

//method arr.reduceRight does the same, but goes from right to left
let arr4=[1,2,3,4,5,6,7];

let results=arr4.reduceRight((sum,current)=>sum+current,0);
console.log(results);//28

//array is also considered as ofbject by typeof
console.log(typeof({})); // object
console.log(typeof([])); // object

//Array.isArray
console.log(Array.isArray({})); //false
console.log(Array.isArray([])); //true
