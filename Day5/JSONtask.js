//convert obj to json and viceversa
let user = {
    name: "John Smith",
    age: 35
  };

let userJSON=JSON.stringify(user);
console.log(userJSON);//{"name":"John Smith","age":35}

let userObj=JSON.parse(userJSON);
console.log(userObj);//{ name: 'John Smith', age: 35 }



//Exclude backreferences
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;//room references meetup
  meetup.self = meetup;//meetup references itself
  
console.log(JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup)? undefined : value;
  }));//{"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}