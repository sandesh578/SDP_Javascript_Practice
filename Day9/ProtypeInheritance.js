let user = {
    name: "Sandesh",
    surname: "Parajuli",

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); //Sandesh Parajuli
  
  //sets the value
  //Writing does not use prototype
  admin.fullName = "Sangam Giri";
  
  console.log(admin.fullName); //Sangam Giri

  //state of user is not modified ,its same
  //Write/delete operations work directly with the object.
  console.log(user.fullName);// Sandesh Parajuli


  let animal = {
    eats: true,
    walk() {
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  rabbit.walk = function() {
    console.log("Rabbit is bouncing");
  };
  
  rabbit.walk();//Rabbit is bouncing

  //walk() property of animal is not modified
  animal.walk();//nothing as walk is empty


  // Object.keys only returns own keys
  console.log(Object.keys(rabbit)); //[ 'jumps', 'walk' ]
  
//The for..in loop iterates over inherited properties too
  for(let prop in rabbit)
  {
    console.log(prop);
  } 
  /*
  jumps
  walk
  eats
*/
//obj.hasOwnProperty can be used to check its either own or inherited property
for(let prop in rabbit)
{
  let isOwn = rabbit.hasOwnProperty(prop);
   if (isOwn) {
      console.log(`Own: ${prop}`); // 
    } else {
      console.log(`Inherited: ${prop}`); // 
    }
} 
/*
Own: jumps
Own: walk
Inherited: eats
*/