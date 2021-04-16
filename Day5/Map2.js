//Iteration over map
let fruits=new Map([
   ["apple",450],
   ["orange",200],
   ["banana",150],
   ["cherry",50]
]);

//for keys
for(let keys of fruits.keys())
{
    console.log(keys);
}

//for values
for(let value of fruits.values())
{
    console.log(value);
}

//for entries
for(let entry of fruits.entries())
{
    console.log(entry);
}

//forEach method of map
fruits.forEach((value,key,map)=>{
    console.log(`${key}: ${value}`);
});

//Map from Objects
//converts object into map
let obj = {
    name: "John",
    age: 30
};

let map1 = new Map(Object.entries(obj));
console.log(map1.get('name'));//John
console.log(map1.get('age'));//30


//Object from map
//converts map to plain object
let prices = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

  let val=Object.fromEntries(prices);
  console.log(val);