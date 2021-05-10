const readline=require('readline');
const fs=require('fs');

let writeToFile=(name)=>{
   fs.writeFile('out1.txt',`My name is ${name}`,(err)=>{
       if(err)
       {
           console.log(err);
       }
   });
};

let rl=readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

rl.question("Enter your name:",(name)=>{
    writeToFile(name);
    rl.close();
});