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
    console.log(str);//Hello
}

message("Hello");

//NFE allows the function to reference itself internally
let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // func is used to recall itself
  }
};

sayHi(); // Hello,Guest

//func();// it wont work as it is used for only internal reference