let user={
   name:"Sandesh Parajuli",
   age:20
};

let clone={};

//copying user properties to clone object
for(let key in user)
{
    clone[key]=user[key];
}

console.log(clone.name);//Sandesh Parajuli

clone.name="Pete";

console.log(clone.name);//Pete
console.log(user.name);//Sandesh Parajuli


let src1={
   age:50,
   roll:920
};
let src2={
    grade:9.7,
    place:"Delhi"
 };
let  dest={};

Object.assign(dest,src1,src2,{temp:30});

console.log(dest.age);//50
console.log(dest.roll);//920
console.log(dest.place);//Delhi
console.log(dest.temp);//30

/*
let user1 = {
  name: "John",
  age: 30
};

let cloned = Object.assign({}, user1);
*/

//Nested objects
let user3={
    name:"Sandesh Parajuli",
    sizes:{
        height:182,
        width:50
    }
};

console.log(user3.sizes.height);//182

//garbage collecter
let obx={
    name:"Sandesh Parajuli"
};

obx=null;
//here name is not rechable so it is removed from memory


let obj={
    age:30,
    sex:"Male"
};
let obj1=obj;

obj=null;
//here obj is still reachable through obj1 so it is still in the memory

