//overriding calss methods
class Animal {
    showName() {
      console.log('animal');
    }
  
    constructor() {
      this.showName();
    }
  }
  
  class Rabbit extends Animal {
    showName() {
      console.log('rabbit');
    }
  }
  
  new Animal(); //animal
  new Rabbit(); //rabbit