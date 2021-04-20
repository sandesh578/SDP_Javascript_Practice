let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;//it is used to set prototype to object created with new
  
 let rabbit = new Rabbit("White Rabbit"); //similar to rabbit.__proto__ == animal
  
  console.log( rabbit.eats ); //true
  console.log(rabbit.name); //White Rabbit

  //Every function has the prototype property even if we don’t provide it
 function Tiger() {}
// by default:
// Tiger.prototype = { constructor: Tiger }

console.log(Tiger.prototype.constructor == Tiger); //true

let tiger = new Tiger(); // inherits from {constructor: Tiger}

console.log(tiger.constructor == Tiger);//true
