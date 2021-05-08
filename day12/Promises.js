//promise is used to handle asynchronous operations
let promise = new Promise(function(resolve, reject) {
    // the function/executor is executed automatically when the promise is constructed
    setTimeout(() => resolve("done"), 1000);
  });

 promise.then(function(value){
    console.log(value);
 }).catch(function(err)
 {
     console.log(err);
 })
 .finally(()=>console.log("Hello"));

new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  })
  // reject runs the second function in .then
   .then(
    result => console.log(result), // doesn't run
    error => console.log(error) // shows "Error: Whoops!" after 1 second
  );

new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  })
    //if we want to handle only errors we can use then
    //.then(null,(err)=>console.log(err));
    // .catch(f) is the same as promise.then(null, f)
    .catch((err)=>console.log(err))

 //We can attach handlers to settled promises
 let promise1 = new Promise(resolve => resolve("Fulfilled"));

 promise1.then((value)=>console.log(value));//Fulfilled

//value passed through finally to then
 new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
  })
  //finally always runs when promises is setteled
    .finally(() => console.log("Promise ready"))//Promise ready
    .then(result => console.log(result));//result

//error passed through finally to catch
    new Promise((resolve, reject) => {
        throw new Error("error");
      })
        .finally(() => console.log("Promise ready"))//Promise ready
        .catch(err => console.log(err.message)); //error

//.then can be used to handle both error and produce result
new Promise(function(resolve,reject)
{
  //resolve("Hello coder");
  reject("Error encountered");
}).then(function(value)
{
 console.log(value);
},function(err)
{
 console.log(err);
});