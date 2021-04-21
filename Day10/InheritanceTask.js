//Erroe creating an instanceit.

class Animal {

    constructor(name) {
      this.name = name;
    }
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      //We must call parent constructor as super() in Child constructor before using this
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); 
  console.log(rabbit.name);//White Rabbit
