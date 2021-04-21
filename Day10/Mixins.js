//mixin is a class/object containing methods that can be used by other classes without a need to inherit from it
let sayMixin = {
    say(phrase) {
      console.log(phrase);
    }
  };
  //Mixins can make use of inheritance
  let sayHiMixin = {
    __proto__: sayMixin,
    sayHi() {
      console.log(`Hello ${this.name}`);
    },
    sayBye() {
        super.say(`Bye ${this.name}`);
        console.log(`Bye ${this.name}`);
    }
  };
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
//copy the methods
  Object.assign(User.prototype, sayHiMixin);

  new User("Sandesh").sayHi();//Hello Sandesh

  new User("Sandesh").sayBye();//Bye Sandesh  Bye Sandesh 

