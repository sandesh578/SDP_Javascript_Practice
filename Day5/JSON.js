let obj={
    name:"Sandesh Parajuli",
    section:"B12",
    roll:950,
    university:"KIIT",
    branch:"CSE",
};

let json=JSON.stringify(obj);//{"name":"Sandesh Parajuli","section":"B12","roll":950,"university":"KIIT","branch":"CSE"}
//converts object into JSON(string)
//this converted string is called JSON-encoded or serialized or stringified or marshalled object
console.log(json);

//JSON.stringify can be applied to primitives as well.

console.log(JSON.stringify(4));//4

console.log(JSON.stringify('Sandesh'));//"Sandesh"

console.log(JSON.stringify(['Sandesh',"Parajuli",3,true]));//["Sandesh","Parajuli",3,true]

console.log(JSON.stringify(false));//false

console.log(JSON.stringify(null));//null

//JSON ignores methods,sumbolic values and keys,properties with undefined value
let user = {
    sayHi() { //methods ignored
      console.log("Hello");
    },
    [Symbol("id")]: 123, // symbol ignored
    something: undefined // undefined property ignored
  };
  console.log(JSON.stringify(user)); //{}


  //JSON.stringfy supports nested objects and automatically converts
  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["Mark", "Joya"]
    }
  };

  console.log(JSON.stringify(meetup));//{"title":"Conference","room":{"number":23,"participants":["Mark","Joya"]}}

//circular refersnce
  let room = {
    number: 23
  };
  
  let meeting = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  
  room.occupiedBy = meetup; // room references meetup
  
  console.log( JSON.stringify(meeting, ['title', 'participants', 'place', 'name', 'number']) );
  //{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}


  //custom "toJSON"
  let place={
     number:23,
     toJSON()
     {
         return this.number;
     }
  };
  let celebrate={
      topic:"Birthday",
      place //celebrate references place
  }

  console.log(JSON.stringify(celebrate));//{"topic":"Birthday","place":23}

  //JSON.parse to convert JSON_string to object i.e decoding

  let objx=JSON.parse(json);
  console.log(objx);
