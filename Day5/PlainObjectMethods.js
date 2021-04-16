let user={
    name:"Sandesh Parajuli",
    roll:950,
    age:20
};

//Object.keys/values/entries ignore symbolic properties
//Object.keys(obj)
for(let keys of Object.keys(user))
{
    console.log(keys);
}

//Object.values(obj)
for(let value of Object.values(user))
{
    console.log(value);
}

//Object.entries(obj)
for(let entry of Object.entries(user))
{
    console.log(entry);
}


let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
    cake: 5,
  };
  
  let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  console.log(doublePrices);//{ banana: 2, orange: 4, meat: 8, cake: 10 }  


  //Task
  //Sum the Salaries
  /*function sumSalaries(salaries)
  {
     let sum=0;
     for(let val of Object.values(salaries))
     {
         sum+=val;
     }
     return sum;
  }*/

  /*
  //We can also use reduce,reduceRight
  function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
  }
  */
   
 function sumSalaries(salaries) {
    return Object.values(salaries).reduceRight((a, b) => a + b); 
  }

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
 console.log(sumSalaries(salaries)); //650


 //count Properties
 /*let count=function(user)
 {
     let count=0;
     for(let key of Object.keys(user))
     {
         count++;
     }
     return count;
 }*/
 function count(obj) {
    return Object.keys(obj).length;
  }
  
 let user1 = {
    name: 'John',
    age: 30,
    place:"Delhi",
  };
  
 console.log(count(user1));//3