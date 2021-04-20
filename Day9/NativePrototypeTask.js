//Add method "f.defer(ms)" to functions
/*Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log("Hello Coder!");
  }
  
  f.defer(1000); //Hello Coder! //shows Hello Coder! after 1 sec
  */

  //Add the decorating "defer()" to functions
  Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args),ms);
    }
  };
  
  function f(a, b) {
    console.log(a+b);
  }
  
  f.defer(1000)(1, 2);//3