//Object.prototype
let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true

//when obj.toString() is called the method is taken from Object.prototype
console.log(obj.toString === Object.prototype.toString); //true

//Array.prototype
let arr = [1, 2, 3];

// it inherits from Array.prototype
console.log( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

console.log( arr.__proto__.__proto__.__proto__ ); // null

//native prototypes can also be changed
String.prototype.show = function() {
  console.log(this);
};

"Sandesh".show(); //[String: 'Sandesh']z

//Plyfilling
if (!String.prototype.repeat) { 

    String.prototype.repeat = function(n) {

      return new Array(n + 1).join(this);
    };
  }
  
  console.log("Hi".repeat(3)); //HiHiHi

//Borrowing from prototypes
  let objx = {
    0: "Hello",
    1: "Coder!",
    2:"What's Up",
    length: 3,
  };

  objx.join = Array.prototype.join;
  
  console.log( objx.join(',') ); //Hello,Coder!,What's Up
