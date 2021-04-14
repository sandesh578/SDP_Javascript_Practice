//hello object
let user={};

user.name="John",
user.surname="Smith",

console.log(user.name);
user.name="Pete";

console.log(user.name);
console.log(user.surname);

delete user.name;

console.log(user.name);


//check for emptiness
function isEmpty(obj)
{
    for(let key in obj)
    {
        return false;
    }
    return true;
}
let schedule={};
console.log(isEmpty(schedule));//true
schedule["8:30"]="get up";
console.log(isEmpty(schedule));//false


//sum object properties
function sum(sal)
{
    let sum=0;
    for(let key in sal)
    {
        sum+=sal[key];
    }
    return sum;
}
let salaries={
    John:100,
    Ann:160,
    Pete:130
};

console.log(sum(salaries));


//multiply numeric property
function multiply(menu)
{
    for(let key in menu)
    {
        if(typeof(menu[key])=='number')
        {
           menu[key]=menu[key]*2;
        }
    }
}
let menu={
    width:200,
    height:300,
    title:"My menu"
}

multiply(menu);

console.log(menu.width);

console.log(menu.height);