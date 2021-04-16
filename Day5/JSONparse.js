  //JSON.parse to convert JSON_string to object i.e decoding
  let obj={
    name:"Sandesh Parajuli",
    section:"B12",
    roll:950,
    university:"KIIT",
    branch:"CSE",
};

let json=JSON.stringify(obj); //converts object to JSON string
console.log(json);//{"name":"Sandesh Parajuli","section":"B12","roll":950,"university":"KIIT","branch":"CSE"}

let objx=JSON.parse(json);//converts json string to object
console.log(objx);
/*//output
{
  name: 'Sandesh Parajuli',
  section: 'B12',
  roll: 950,
  university: 'KIIT',
  branch: 'CSE'
}
*/

let numbers="[1,2,3,4,5]";
numbers = JSON.parse(numbers);
console.log(numbers);//[ 1, 2, 3, 4, 5 ]
console.log(numbers[3]);//4


let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);
console.log(user);//{ name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }
console.log(user.friends[1]); //1
console.log(user.isAdmin);//false
console.log(user.name);//John

//using reviver function
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;
  
  schedule = JSON.parse(schedule,function(key,value) {
    if (key == 'date')
    {
         return new Date(value);
    }
    return value;
  });
  
  console.log(schedule.meetups[1].date.getDate());//18