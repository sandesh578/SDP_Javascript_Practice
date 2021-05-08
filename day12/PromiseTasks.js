//Re-solve a promise
let promise=new Promise(function(resolve,reject)
{
   resolve(1);

   setTimeout(()=>resolve(2),1000);
});

//There can be only one single result or error 
promise.then((value)=>console.log(value));//1

//Delay with a promise
function delay(ms)
{
   return new Promise(function(resolve)
   {
     setTimeout(resolve,ms);
   });
}

delay(3000).then(()=>console.log("runs after 3 seconds"));