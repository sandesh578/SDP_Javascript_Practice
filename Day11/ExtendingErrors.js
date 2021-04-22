//multiple error class can be inherieted in multilevel manner
class ReadError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = 'ReadError';
    }
  }

class ValidationError extends ReadError {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.name = "PropertyRequiredError";
      this.property = property;
    }
  }

  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
  
    return user;
  }
  
  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ReadError) {
        console.log("Cause : "+err.cause); //Cause : undefined
        console.log(err.name); //PropertyRequiredError
    }
    if (err instanceof ValidationError) {
      console.log("Invalid data: " + err.message); // Invalid data: No property: name
      console.log(err.name); // PropertyRequiredError
      console.log(err.property); // name
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + err.message);
    } else {
      throw err; //rethrowing error
    }
  }