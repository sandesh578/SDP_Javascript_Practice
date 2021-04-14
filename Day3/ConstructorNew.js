function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Sandesh");
  
  console.log(user.name); // Sandesh
  console.log(user.isAdmin); // false