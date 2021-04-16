//set takes only uniques values
let set=new Set();
//objects can also be added to set
let name1={name:"Sandesh"};
let name2={name:"Sangam"};
let name3={name:"Nischit"};
let name4={name:"Rakesh"};

set.add(name1);
set.add(name2);
set.add(name3);
set.add(name2);
set.add(name4);

set.delete(name2);

console.log(set);
console.log(set.size);//reapeted elements are not taken
console.log(set.has(name2));//true

for(let name of set)
{
    console.log(name.name);
}

//other methods
//set.keys()
for(let keys of set.keys())
{
   console.log(keys);//returns values
}

//set.values()
for(let value of set.values())
{
   console.log(value);
}

//set.entries()
for(let entry of set.entries())
{
   console.log(entry);//returns array of same value as key as well as value
}

//forEach
set.forEach((value, valueAgain, set) => {
    console.log(value);
  });