//While creating class it creates a function and stores class methods
//Classes always use strict
class User{
    
    constructor(name)
    {
        this.name=name;
    }
    //Class methods are non-enumerable ie false by default
    display()
    {
        console.log(`Hello ${this.name}`);
    }

}

//class is a function
console.log(typeof(User));//function

//After new User object is created when we call its method it’s taken from the prototype
console.log(User === User.prototype.constructor); //true

console.log(User.prototype.display);//[Function: display]

//We can also add methods to prototype
User.prototype.greet=function() {
    console.log(`This is ${this.name}`);
}

//constructor method is automatically called by new
let user=new User("Sandesh Parjuli");

user.display();//Hello Sandesh Parjuli

user.greet();//This is Sandesh Parjuli


//We can also create class expression like function expression

let Person=class{
    sayHi() {
        console.log("Hello");
      }
}

new Person().sayHi();//Hello


//We can also create named class expression
let User1 = class MyClass {
    sayHi() {
      console.log(MyClass);//[class MyClass]  // MyClass name is visible only inside the class
    }
  };
  
  new User1().sayHi();


  //We can also return a class
  function makeClass(phrase) {

    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }
  
  let Userx = makeClass("Hello");
  
  new Userx().sayHi();//Hello

  //We can also use computed names for class
  //Class fields can also be used
  class Mobile{
    name="RealMe";

    ['display'+'Name']()
    {
        console.log(this.name);
    }
  }

 new Mobile().displayName();//RealMe


 //Getters and setters
 class User3 {
    constructor(name) {
        //it invokes setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  }
  
  let user3 = new User3("Sandesh PArajuli");
  console.log(user3.name); //Sandesh PArajuli
  
  user4 = new User3("");//Name is too short.

  //Making bound methods with class fields
  class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      console.log(this.value);
    }
  }
  
  let button = new Button("hello Coder");
  setTimeout(button.click, 1000);//hello Coder

