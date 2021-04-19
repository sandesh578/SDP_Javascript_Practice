//Filter through function
function inBetween(a,b)
{
    return function(x) {
        return (x<=b)&&(x>=a)?true:false;;
      };
}


let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3,6)));//[ 3, 4, 5, 6 ]

function inArray(arr)
{
    return function(x) {
        return arr.includes(x);
      };
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inArray([1,2,10])));//[ 1, 2 ]

//sort by field
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ]; 

function byField(str)
{
   return function(a,b){
   if(a[str]>b[str])
   {
       return 1;
   }
   else
   {
      return -1; 
   }
 }
}

users.sort(byField('name'));
users.sort(byField('age'));

console.log(users);

//Army of function
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() {
        console.log(i);
      };
      shooters.push(shooter);
      i++;
    }

    return shooters;
  }
  
  let army = makeArmy();
  
  /* all shooters show 10 beacuse there is no i as local variable inside shooter 
  function it takes i value from outer scope*/
  army[0]();//10
  army[1]();//10
  army[2]();//10