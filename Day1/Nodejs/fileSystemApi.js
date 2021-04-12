const fs = require('fs');
const readline = require('readline');

const writeToFile = (name) => {
    var content = `Hello ${name}!!`;
    fs.writeFile('nodefs.txt', content, err => {
        if (err) {
            console.error(err);
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.close();
    writeToFile(name);
});

//Another way

/*
try {
    const data = fs.writeFileSync('nodefs.txt', "Hello World!!");
} catch (err) {
    console.error(err);
}
*/