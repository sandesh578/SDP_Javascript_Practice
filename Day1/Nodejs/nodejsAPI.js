const readline = require('readline'); //Nodejs builtin module

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {

    console.log(`Hello ${name}!!\nHow are you?`);

    rl.close();
});

/*
Output:
Enter your name: Sandesh Parajuli
Hello Sandesh Parajuli!!
How are you?
*/