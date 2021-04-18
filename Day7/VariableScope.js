//variable declared inside code blocks are only visible to its block
//code blocks
{
    let value=5;
    console.log(value);
}

//console.log(value);//shows error -value is not defined

//there would be error if we redecalred previously declared variable without code block
let message="hello";

//let message="Hi";//Identifier 'message' has already been declared

console.log(message);

//But within different block we can declare variable again

{
    let str="Sandesh";
    console.log(str);//Sandesh
}

{
    let str="Sandesh";
    console.log(str);//Sandesh
}

//nested function -function inside another function
function makeCounter() {
    let count = 0;
    return function() {//nested function
      return count++;
    };
  }
  
  let counter = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); // 2

