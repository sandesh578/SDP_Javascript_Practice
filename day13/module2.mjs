import {sayHi as Hi, sayBye} from './module1.mjs';

Hi('John'); // Hello, John!
sayBye('John');//Bye, John!

import User from './module1.mjs';

let obj=new User('John');

console.log(obj.name);//John