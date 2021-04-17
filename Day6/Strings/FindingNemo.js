/*You're given a string of words. You need to find the word "Nemo",
 and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
If you can't find Nemo, return "I can't find Nemo :(".*/

function findNemo(str)
{
   let arr=str.split(" ");
   for(let i=0;i<arr.length;i++)
   {
        if(arr[i]=="Nemo")
        {
            return `I am finding Nemo at ${i+1}!`;
        }
   }
   return "I can't find Nemo :(";
}

console.log(findNemo("I am finding Nemo !"));//I am finding Nemo at 4!

console.log(findNemo("Nemo is me"));//I am finding Nemo at 1!


console.log(findNemo("I Nemo am"));//I am finding Nemo at 2!