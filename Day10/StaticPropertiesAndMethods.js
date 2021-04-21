//static properties belongs to calassnot instance 
class Animal {
    static planet = "Earth";
  
    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }
  
    run(speed = 0) {
      this.speed += speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  
  }
  
  // Static properties and methods can also be inherited
  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }
  }
  
  let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
  ];
  
  rabbits.sort(Rabbit.compare);
  
  rabbits[0].run(); // Black Rabbit runs with speed 5.
  
  console.log(Rabbit.planet); 

  //createTodays()is method of whole class not method of article object
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static createTodays() {
      return new this("Today's digest", new Date());
    }
  }
  
  let article = Article.createTodays();
  
  console.log( article.title );//Today's digest

  class Mammal {

    constructor(name) {
    this.name = name;
    }

    eat() {
    console.log(this.name + " eats");
    }

    static sleep() {
    console.log(this.name + " sleeps");
     }
    }
    
    class Cat extends Mammal {
    walk() {
    console.log(this.name + " walks");
    }
    }
    
    let cat = new Cat("kitty");
    
    cat.walk(); // kitty walks

    cat.eat(); // kitty eats

    //staic methods belongs to class not object
    Cat.sleep(); // Cat sleeps
