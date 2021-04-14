//property value shorthand
//properties can have same name as variables
function makeUser(name,age,roll)
{
   return {
     //name:name,
     name,//same as name:name
     age:age,
     roll:roll
   };
}

let user=makeUser("Sandesh",20,950);

console.log(user.name);//Sandesh
console.log(user.age);//20
console.log("age" in user);//true


//object property can be reserved words too unlike variables
//number can also be used for property name as it is converted to string
//Whatever name we give to property(number,symbol) it is converted to string
let obj={
    for:2,
    static:3,
    return:2,
    function:89,
    0:4  
}

console.log(obj.for+obj.static+obj.return+obj.function);//96
console.log(obj[0]);//4
console.log(obj["0"]);//4


let ob={};
ob.__proto__=5;
console.log(ob.__proto__);//does not return 5
//__proto__ cannot be assigned primitive value