new Promise((resolve, reject) => {
    reject(new Error("Whoops! error"));
  }).catch((err)=>console.log(err.message));//Whoops! error

//Works same way as above
new Promise((resolve, reject) => {
    throw new Error("Whoops! error encountered");
  }).catch((err)=>console.log(err.message));//Whoops! error encountered

new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    throw new Error("Whoops!"); //rejects the promise
  }).catch((err)=>console.log(err.message)); //Whoops!

//catch not only catches explict exception but also accidental
  new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    blabla();
  }).catch((err)=>console.log(err.message));//blabla is not defined