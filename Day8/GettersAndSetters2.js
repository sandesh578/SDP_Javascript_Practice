//Getters and setters can be used as wrappers over real property values
let user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short,Please try another name.");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "San";//Name is too short,Please try another name.
  console.log(user.name); //undefined
  
  user.name = "Sandesh Parajuli";
  console.log(user.name); //Sandesh Parajuli

  // getter and setter can also be used  for compatibility
  //to take control over regular data property
  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  
  let user1 = new User("Sofia", new Date(1992,6,1));
  
  console.log(user1.birthday);//1992-06-30T18:30:00.000Z
  console.log(user1.age); //29
