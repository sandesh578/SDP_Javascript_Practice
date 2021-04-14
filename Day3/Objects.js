//Objects uses key value pair
let user={
    name:"Sandesh Parajuli",
    age:22,
    "likes birds":true,
    isAdmin:false//last property may or end with comma
};

console.log(user.name);//Sandesh Parajuli
console.log(user.age);//22

console.log(user["likes birds"]);//true

console.log(user.isAdmin);//false

delete user.isAdmin;

console.log(user.isAdmin);//undefined

let key="likes birds";
user[key]=false;

console.log(user[key]);//false

/*
//extracting key value pairs from object using for loop 
for(key in user)
{
    console.log("key:"+key);
    console.log("value:"+user[key]);
}*/

//computed properties

let fruit="apple";
let bag={
    [fruit]:50,
    [fruit+"Phones"]:10
};

console.log(bag.apple);//50
console.log(bag.applePhones);//10



