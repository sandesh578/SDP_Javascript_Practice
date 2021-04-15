//map
//it iterates through each element and applies condition and returns array of results
let arr=[1,2,3,4,5,6];

console.log(arr.map(item=>item*2));//[ 2, 4, 6, 8, 10, 12 ]

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); //[ 5, 7, 6 ]


//sort
//elements are sorted as string by default and array of result is returned
let arr1 = [ 1, 2, 15 ];
arr.sort();

console.log(arr1);//[ 1, 2, 15 ]

//We can sort by ourself applying necessary condition
function compare(a,b)
{
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr3=[1,5,9,2,6,4];
arr3.sort(compare);

console.log(arr3);//[ 1, 2, 4, 5, 6, 9 ]

//function shold return positive number for greaater and ngative for less
let arr4 = [ 1, 19, 15, 7, 2 ];
arr4.sort(function(a, b) { return a - b; });
console.log(arr4); //[ 1, 2, 7, 15, 19 ]

//arrow function can be used for this
let arr5 = [ 1, 19, 15, 7, 2 ,11];
arr5.sort((a, b)=>{ return a - b; });
console.log(arr5); //[ 1, 2, 7, 11, 15, 19 ]

//sorting for string using localCompare
let countries = ['Sandesh', 'Andra', 'Viten'];
console.log( countries.sort( (a, b) => a > b ? 1 : -1) );//[ 'Andra', 'Sandesh', 'Viten' ]
console.log( countries.sort( (a, b) => a.localeCompare(b) ) );//[ 'Andra', 'Sandesh', 'Viten' ]


//reverse
let arr6=[1,2,3,4,5,6];
arr6.reverse();

console.log(arr6);//[ 6, 5, 4, 3, 2, 1 ]


