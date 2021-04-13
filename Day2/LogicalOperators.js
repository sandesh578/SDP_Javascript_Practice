//OR(||) operator
console.log(null || 0); //0
console.log(undefined || null); //null
console.log(null || 1 || "Hello"); //1  //returns first truthy value
console.log(0 || null || undefined); //undefined  //returns last value in case all are falsy

//short-circuit evaluation
true || console.log("Hello"); //no output
false || console.log("Hello"); //Hello


//AND(&&) operator
let value1 = 5;
let value2 = 9;

console.log(value1 && value2 && 0 && null); //0  //returns first falsy value

console.log(value1 && value2 && 1); //1

console.log(1 && 2); //2 //returns last operand if all true

//precedence of AND is higher than OR

console.log(null || 2 && 3 || 4); //3


//Nullish Coalscing Operator(??)
console.log(null ?? undefined ?? 6);//6

let user;
console.log(user??"Anonymous");//Anonymous

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");//Supercoder //returns first defined value


let size=0;

console.log(size||50);//50
console.log(size??50);//0