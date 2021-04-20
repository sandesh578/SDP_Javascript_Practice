//inheritance is a way to pass properties of parent to child
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
//inheritance uses extends keyword to extend parent by child class
  class Rabbit extends Animal {

    constructor(name,name2)
    {
        //super allows to call a parent constructor
        super(name);
        this.name2=name2;
    }

    hide() {
      console.log(`${this.name2} hides!`);
    }

    stop() {
        super.stop();
        console.log(`${this.name2} stands still.`);
      }
  }

  let rabbit = new Rabbit("My animal","White Rabbit");
  
  rabbit.run(5); //White Rabbit runs with speed 5.
  rabbit.hide();  //White Rabbit hides!
  rabbit.stop();  //White Rabbit stands still. //ovewritten method is called

  //Any Expression is allowed after extends
  function f(phrase) {
    return class {
      sayHi() {
           console.log(phrase);
         }
    };
  }
  

  class User extends f("Hello") {
    sayBye()
    {
        console.log("Bye");
    }
  }
  
 let user = new User();
 user.sayHi();//hello
 user.sayBye();//Bye