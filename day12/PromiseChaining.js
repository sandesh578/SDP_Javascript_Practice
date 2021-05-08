//promise chaining
new Promise(function(resolve,reject) {

    setTimeout(() => resolve(1),1000)
  
  }).then(function(result) {
  
    console.log(result); //1
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); //2
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); //4
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); //8
    return result * 2;
  });

  //return promise
  new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);

  }).then(function(result) {

    console.log(result); //1

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); //2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); //4
    
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("No more"), 1000);
    });
  }).catch((err)=>console.log(err));//NO more

  //Thenables
  class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      console.log(resolve);
      // resolve with this.num*2 after the 1 second
      setTimeout(() => resolve(this.num * 2), 3000);
    }
  }
  
  new Promise(resolve => resolve(1))
    .then(result => {
      return new Thenable(result);
    })
    .then((value)=>console.log(value));//2 