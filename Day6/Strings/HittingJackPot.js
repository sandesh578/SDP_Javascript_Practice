/*Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical,
 and false otherwise. The array will contain 4 elements.*/

 function testJackpot(arr)
 {
     let value=arr[0];
     for(let val of arr)
     {
        if(val!=value)
        {
           return false;
        }
     }
     return true;
 }

 console.log(testJackpot(["@", "@", "@", "@"]));//true


 console.log(testJackpot(["abc", "abc", "abc", "abc"]));//true

 console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));//false

 console.log(testJackpot(["SS", "SS", "SS", "Ss"]) );//false;

 console.log(testJackpot(["SS", "SS", "SS", "SS"]));//true;