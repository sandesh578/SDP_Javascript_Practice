const readline=require('readline');

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.question('Enter your name:',(name)=>{
    console.log(`Name is ${name}.`);
    rl.close();
});
