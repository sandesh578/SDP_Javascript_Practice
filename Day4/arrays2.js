//for iterating through array we have for..of loop

let arr=["Sandesh","Srysty","Karishma","Nipun"];

for(let name of arr)
{
    console.log(name);
}


//As arrays are object we can also use for in loops
//but use of for..in loop for array is not recommended
for(let i in arr)
{
    console.log(arr[i]);
}

//We can also create array using new keyword
let fruits=new Array("Apples","Oranges","Banana");

console.log(fruits);
fruits.push("Cherry");
console.log(fruits);
console.log(fruits.toString());//array converted to string
console.log(String.valueOf(fruits));

let pos=new Array(2);//By default elements have undefined value
 
console.log(pos[0]);//undefined
console.log(pos[1]);//undefined
console.log(pos.length);


console.log( [] + 1 ); // 1
console.log( [1] + 1 ); // 11
console.log( [1,2] + 1 ); //1,21
