//callback is a function passed as argument to another function
let message=function()
{
    console.log("Hello coder!!!");//Hello coder!!!
}

//Callback makes sure that a function argument runs only after another task is comleted
setTimeout(message,2000);//here message function is called only after 2s has passed

//Anonymous function can also be used for callback
setTimeout(function()
{
    console.log("Hi Sandesh");//Hi Sandesh
},1000);

function display(num)
{
    console.log(`Sum is: ${num}`);
}
function calculate(num1,num2,callback)
{
    let sum=num1+num2;
    callback(sum);
}

calculate(5,7,display);//Sum is: 12

