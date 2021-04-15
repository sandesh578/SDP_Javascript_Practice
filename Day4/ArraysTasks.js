//Is array copied?
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

//arrays are also objects so when shoppingCart is assigned to fruits both point to same memory/array
//so both gets modified
console.log( fruits.length ); // 4

//Array operations.
let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length- 1)/2)]="Classics";
console.log(styles.shift());
styles.unshift("Rap");
styles.unshift("Reggae");

console.log(styles);


//Calling in an array context

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); 

