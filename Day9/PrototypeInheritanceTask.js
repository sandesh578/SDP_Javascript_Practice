//Working with prototypes
let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  //accesses its own property
  console.log( rabbit.jumps );//true
  
  delete rabbit.jumps;//deletes its own property
  
  //access property from prototype ie inherited
  console.log( rabbit.jumps );//null
  
  delete animal.jumps;
  
  //own as well as prototype property is deleted
  console.log( rabbit.jumps );//undefined


  //searching algorithm
  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed
  };


  console.log(pockets.glasses);//1
  console.log(pockets.pen); // 3
  console.log(bed.glasses); // 1
  console.log(table.money); // undefined //no access 

  //Why are both hamsters full?
  //it is because food is pushed into the stomach so stomach array is changed
  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach=food;
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  speedy.eat("apple");
  console.log( speedy.stomach ); //[ 'apple' ]
  
  console.log( lazy.stomach ); //[ ]