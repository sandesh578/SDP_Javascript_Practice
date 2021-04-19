let user = {
    firstname: "Sandesh",
    lastname: "Parajuli",

    set fullName(value) {//setter method -for assigning values
        [this.firstname, this.lastname] = value.split(" ");
    },

    get fullName() {//getter method -for reading values
      return `${this.firstname} ${this.lastname}`;
    }
  };

  //user.fullName is not called as function it is caled noramally ,the get runs behind the scenes
  console.log(user.fullName);//Sandesh Parajuli

  //assigning new values using setter
  user.fullName="Bill Clinton";

  console.log(user.fullName);//Bill Clinton


  let user1 = {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(user1, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
  
  console.log(user1.fullName); // John Smith
  
  for(let key in user1)
  {
      console.log(key);
  }
  /*
  Output:
  name
surname
*/
