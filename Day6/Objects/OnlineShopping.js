/*Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping
 if the total cost of items purchased exceeds $50.00.*/

 function freeShipping(obj)
 {
     let sum=0;
     for(let val of Object.values(obj))
     {
        sum+=val;
     }
     if(sum>50)
     {
         return true;
     }
     return false;
 }

console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));//false

console.log(freeShipping({ "Flatscreen TV": 399.99 }));//true

console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));//true