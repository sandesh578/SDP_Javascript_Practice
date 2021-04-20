function foo(){
    cosole.log("Hello");
};

console.log(foo.prototype);//{} object


let user={
    name:"Sandesh",
    age:20
};

let user1={
    age:30
};

user1.__proto__=user;

//name is inherited  from user1 as user is prototype of user1
//or we can also say user prototypically inherits from user1
console.log(user1.name);//Sandesh

console.log(user1.age);//30

let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // walk is automatically inherited/taken from the prototype
  rabbit.walk(); //Animal walk


  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };

//takes walk from animal and jumps from rabbit
 longEar.walk(); //Animal walk
 console.log(longEar.jumps); //true 