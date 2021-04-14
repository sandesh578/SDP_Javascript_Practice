//this is free in javaScript evaluated at runtime
//arrow function has no its own this
let user={
    name:"Sandesh Parajuli",
    age:20,
    greet()
    {
        console.log(this.name+"\n"+this.age);
    },
    sayHi:()=>{
        console.log("Hello "+this.name);
    }
}

user.greet();//Sandesh Parajuli 20
user.sayHi();//Hello undefined


function makeUser() {
    return {
      name: "Sandesh",
      reference() {
        return this;
      }
    };
  }
  
  let user1 = makeUser();
  
  console.log( user1.reference().name ); // Sandesh



  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      console.log( this.step );
    }
  };

  ladder.up().up().down().showStep();//1