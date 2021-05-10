function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    console.log(`Bye, ${user}!`);
  }
  

  export default class User {
    constructor(name) {
      this.name = name;
    }
  }

  export {sayHi, sayBye};