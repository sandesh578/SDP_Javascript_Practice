//Map is a collection
//Data is stored as key value pairs
//It allows key of any type
let map=new Map();

map.set(1,"Sandesh");
map.set(2,"Sofia");
map.set(3,"Nischit");
map.set(4,"Sangam");
map.set(5,"Harry");
map.set(6,"Peter");

console.log(map);
console.log(map.get(6));//Peter
console.log(map.has(7));//false
map.delete(1);
console.log(map.size);

console.log(map);

//map  can also use objects as key
let Peter={
    name:"Peter"
};

map.set(Peter,"Good guy");

console.log(map.get(Peter));//Good guy

//chaiining in map
map.set(1,"Sandesh")
   .set(7,true)
   .set(8,8);

console.log(map.get(8));//8
console.log(map.get(1));//Sandesh
console.log(map.get(7));//true