//delete
let arr=["Sandesh","Sangam","Nischit"];
console.log(arr);
delete arr[1];//deletes Sangam
console.log(arr.length);//3  //element is deleted but array size is still 3


//splice
let arr1 = ["I", "study", "JavaScript"];
let removed=arr1.splice(2, 1); // from index 2 remove 1 element
console.log(arr1); // [ 'I', 'study' ]
console.log(removed);//[ 'JavaScript' ]

//remove and add using splice
let arr2 = ["I", "study", "JavaScript", "right", "now"];
arr2.splice(0, 3, "Let's", "dance");// remove 3 first elements and replace them with another
console.log(arr2);//[ "Let's", 'dance', 'right', 'now' ]


let arr3=[1,2,3,4,5,6,7];
console.log(arr3.length);//7
arr3.splice(7,0,8,9,10,11);//adds element after 7th index
console.log(arr3.length);//11
console.log(arr3);


//negatives indexes are also allowed
//it counts from last of array
let arr4=[1,2,3,4,9];
console.log(arr4.length);//5
arr4.splice(-1,0,5,6,7,8);//9
console.log(arr4.length);//1-9 is printed as elements are added before 9
console.log(arr4);

//slice
let arr5=[1,2,3,4,5];
console.log(arr5.slice(1,3));//[ 2, 3 ]
console.log(arr5.slice(2,5));//[ 3, 4, 5 ]
console.log(arr5.slice(1,-2));[ 2, 3 ]  //negative indexing starts from last