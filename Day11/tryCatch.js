//try catch block is used for error handling
try{
  a=5;
  b=0;
  console.log("The result is"+a/b);
  //if error occurs the flows moves to catch block and if not catch block will be ignored
}
catch(err)
{
    console.log(err);//The result isInfinity
}

//try...catch works synchronously
/*try {
    setTimeout(function() {
      console.log(5/0);//the block ends here
    }, 1000);
  } catch (err) {
    console.log( "It won't work" );
  }//Infinity*/

setTimeout(function() {
    try {
      console.log(value);
    } catch {
      console.log( "error is caught here!" );//error is caught here!
    }
  }, 1000);

//When an error occurs, JavaScript generates an object containing the details about it
//the error object has name,message,stack
  try {
    value; 
  } catch (err) {
    console.log(err.name); //ReferenceError
    console.log(err.message); //value is not defined
    //console.log(err.stack); 

    //console.log(err); // ReferenceError: value is not defined
  }

   //throwing error using throw

  let error = new Error("Error is generated");

  console.log(error.name); // Error
  console.log(error.message); //Error is generated


let json = '{ "age": 30 }';

try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); 
  }

  console.log( user.name );

} catch (err) {
    console.log( "JSON Error: " + err.message ); //JSON Error: Incomplete data: no name
}

//rethrowing a error
try {
    user;
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log('ReferenceError'); //ReferenceError
    }
    else
    {
      throw err;
    }
  }

  //try catch finally
  //finally block is executed after each try and catch block
  try {
    console.log('try');//try
  } catch (err) {
    console.log('catch');
  } finally {
    console.log('finally');//finally
  }