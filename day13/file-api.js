let file=require('fs');

// file.writeFileSync('out.txt','Hello Coder How are you??');//Synchronous
// console.log("This line is going to print after previous line.");

file.writeFile('Hello.txt',"This is written asynchronously.",(err)=>{
    console.log("This is printed after written to file");
});
console.log("This line is going to print after previous line.");

let myLoggerApi=function(logmessage,callback)
{
    file.writeFile('out.log',logmessage,callback);
}

function updateLogMetrices()
{
    file.writeFile('out.log',"Updated message to log.",()=>{});
}
myLoggerApi("Hi,How are you doing?",()=>{
    updateLogMetrices();
});