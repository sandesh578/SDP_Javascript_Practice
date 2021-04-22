//we can create our own custom error class and use it
class ValidationError extends Error {
    constructor(message) {
      super(message); 
      this.name = "ValidationError";
    }
  }
  
  function test() {
    throw new ValidationError("Error!");
  }
  
  try {
    test();
  } catch(err) {
    console.log(err.message); //Error!
    console.log(err.name); //ValidationError
   // console.log(err.stack); // a list of nested calls with line numbers for each
  }


  class MyError extends Error{
    constructor(message)
    {
        super(message);
        this.name=this.constructor.name;
    }
}

try
{
    throw new MyError("Error has occured");
}
catch(err)
{
    if(!err instanceof MyError)
    {
        console.log("Error is instance of MyError class");
    }
    else if(err instanceof Error)
    {
        console.log("Error is instance of Error class");
    }
    else
    {
        // console.log("Error");
        throw err;
    }
}
finally{
    console.log("This is finally block");
}


