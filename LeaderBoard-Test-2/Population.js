/*Assume you are given a function calculatePopuplation(country) that calculates population of a given country and it takes good
 amount of time to calculate the population. However the population of a country doesn't change rapidly, so the function should
  not be doing calculation on each call. Instead it can return the population which was calculated in last 10 seconds if there 
  was any, otherwise it does a fresh calculation.  
You can assume that once population has been calculated then it won't change in next 10 seconds. After 10 seconds of calculation,
 the population will change.
The function definition is given below, you need to write a version of this function. Note that the population of any country 
should automatically get cleared from cache in 10 seconds after it was put in cache.
*/

let val=(getTime()+10)%60;
function getTime()
{
    let date=new Date();
    let currDate=new Date();
    return currDate.getSeconds();
}


let k=Math.random() * (1000000000*5 - 1000000000) + 1000000000;
let cache=new Map();
    cache.set(1,k);
    let n=cache.get(1);
function calculatePopulation(country){
    const l = country.length;
    
    let currTime=getTime();
    if(currTime===val)
    {
        cache.clear();
        cache.set(1,Math.random() * (1000000000*5 - 1000000000) + 1000000000);
        n=cache.get(1);
        val=(getTime()+10)%60;
    }
    return parseInt(n);    
}

for(let i=0;i<=1000000;i++) 
{
    console.log(calculatePopulation("India"));
}










