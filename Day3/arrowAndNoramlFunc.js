//Availiability of arguments objects in regular function but not in arrow function
let user={
    show()
    {
        console.log(arguments);
    }
}
//user.show(1,2,3);


let user1={
    show:()=>{
        console.log(arguments);
    }
}
user1.show(1,2,3);//it shows arguments are not defined

//regular function are callable as well as constructable
function myFunction()
{
   console.log("Hello");
}

//myFunction();//callable
//var obj=new myFunction();//coonstructable -using new keywiord

//Arrow function are only callable ,we can't construct using new keyword

var greet=()=>{
    console.log("Hi");
}

//greet();//callable
//var obj1=new greet();//Error - greet is not a constructor


//Arrow function don not have their own this but regular function has.

var test={
    name:"Sandesh",
    testRegular()
    {
        console.log("Hello "+this.name);
    }
    ,
    testArrow:()=>{
        console.log("Hello "+this.name);
    }
}

//test.testRegular();//Hello sandesh
//test.testArrow();//Hello undefined
