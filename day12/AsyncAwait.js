//Using Async before function returns a promise
async function f(){
    return Promise.resolve(1);
  }

f().then((value)=>console.log(value));//1

//Await is used only inside function with async
//Await cannot be used with normal functions
async function f1() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; //wait until the promise resolves
  
    console.log(result); //"done!"
  }
  f1();

  //await accepts “thenables”
  class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      console.log(resolve);
      setTimeout(() => resolve(this.num * 2), 1000);
    }
  }
  
  async function f2() {
    //waits for 1 second, then result becomes 2
    let result = await new Thenable(1);
    console.log(result);
  }
  
  f2();//2

//Async class methods
  class Waiter {
    async wait() {
      return await Promise.resolve(5);
    }
  }
  
  new Waiter()
    .wait()
    .then((value)=>console.log(value));//5

async function f4() {
   return await Promise.reject(new Error("Whoops! error"));
}
f4().catch((err)=>console.log(err.message));//Whoops! error

//It is same as above
async function f3() {
    throw new Error("Whoops!");
}
f3().catch((err)=>console.log(err.message));//Whoops!