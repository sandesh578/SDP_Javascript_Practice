//Destructuring Assignment
let user = {
    name: "John",
    years: 30
  };
let {name,years:age,isAdmin=false}=user;
console.log(name);//John
console.log(age);//30
console.log(isAdmin);//false


//The maximal salary
function maxSalaries(salaries)
{
    let max=0;
    let name;
    for(let [key,value] of Object.entries(salaries))
    {
        if(value>max)
        {
            max=value;
            name=key;
        }
    }
    return name;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(maxSalaries(salaries));//pete