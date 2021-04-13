sayHi("Sandesh Parajuli"); // Hello, Sandesh Parajuli

//function declaration
function sayHi(name) {
  console.log( `Hello, ${name}` );
}

//function Expression
let greet=function(greetings){
    console.log( `Welcome, ${greetings} to JavaScript Development.` );
}

greet("Sandesh Parajuli");

//callback functions
function ask(value, yes, no) {
    if (value == 'Yes') yes()
    else no();
  }
  
  ask(
    "Yes",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
  );


let age = 22;

let welcome = (age < 18) ?
  function() { console.log("Hello!"); } :
  function() { console.log("Greetings!"); };

welcome(); //Greetings!


//Arrow Function

let add=(a,b)=>a+b;

console.log(add(5,8));