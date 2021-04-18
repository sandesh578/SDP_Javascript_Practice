//function object has name property

function greet()
{
    console.log("Hello");
}

console.log(greet.name);//greet


let call=function()
{
    console.log("Hi");
}

console.log(call.name);//call

//also works for default value
function f(sayHi = function() {}) {
    console.log(sayHi.name); // sayHi 
  }
  
  f();

  //Objectsmethod also have name property
  let user = {
    sayHi() {
        console.log("Hi");
    },

    sayBye: function() {
      console.log("Bye");
    }
  }
  
  console.log(user.sayHi.name); //sayHi
  console.log(user.sayBye.name); //sayBye


//function objects also has length property
function f1(a) {}
function f2(a, b) {}
function many(a, b, c, d, e) {}

console.log(f1.length); //1
console.log(f2.length); //2
console.log(many.length); //5

//Custom properties
function say() {
    console.log("Hi");
    say.counter++;
  }
  say.counter = 0; // initial value
  say(); // Hi
  say(); // Hi
  say(); // Hi
  
  console.log(`Called ${say.counter} times`); //Called 3 times

  //Function properties can replace closure properties
  function makeCounter() {
      function counter() {
      return counter.count++;
    };
    counter.count = 0;
    return counter;
  }
  let counter = makeCounter();
  //counter.count = 10;
  console.log(counter()); //0
  console.log(counter()); //1


  //Named Function Expression(NFE)
  let message=function func(str)
  {
      console.log(message);
  }

  message("Hello");

  //NFE allows the function to reference itself internally
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // func is used to recall itself
    }
  };
  
  sayHi(); // Hello, Guest

  //func();// it wont work