//Does a function pickup latest changes?
//Yes the function uses the most recent variable
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi();//Hi, Pete

//Which variables are available?

function makeWorker() {
    let name1 = "Pete";
  
    return function() {
      console.log(name1);
    };
  }
  
  let name1 = "John";
  
  let work = makeWorker();
  
  work();//Pete

  //Are counters independent?
  //Yes they are completely independent as their outer lexical environment is different
  //and each lexical environment has its own count

  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // 0
  console.log( counter2() ); // 1


  //Counter object
  //both nested functions are created within same lexical environment
  // so count variable is shared
  function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counterx = new Counter();
  
  console.log( counterx.up() ); // 1
  console.log( counterx.up() ); // 2
  console.log( counterx.down() ); // 1


//Function in if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

//sayHi();//it will show error as sayHi() is only available inside if block

//Sum with closures
/*
sum(1)(2) = 3
sum(5)(-1) = 4
*/
function sum(a) {
    return function(b) {
      return a + b; // takes "a" from the outer lexical environment
    };
  }
  
  console.log(sum(1)(2)); // 3
  console.log(sum(5)(-1)); // 4