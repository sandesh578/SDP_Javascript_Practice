let now=new Date();
console.log(now);//current date time

let begin=new Date(0);
console.log(begin);//1970-01-01T00:00:00.000Z

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );//1969-12-31T00:00:00.000Z

console.log(new Date("2001-03-28"));//2001-03-28T00:00:00.000Z

console.log(new Date(2005,0,1,0,0,0,0));//2004-12-31T18:30:00.000Z

console.log(new Date(2005,0,1));//2004-12-31T18:30:00.000Z

console.log(new Date().getFullYear());//2021

console.log(new Date().getUTCMonth());//3

console.log(new Date().getDate());//16

console.log(new Date().getHours());//15
console.log(new Date().getMinutes());//27
console.log(new Date().getSeconds());//8
console.log(new Date().getMilliseconds());//661

console.log(new Date().getDay());//5

console.log(new Date().getUTCHours());//9

console.log(new Date().getTimezoneOffset());//-330

//setting date components
let today=new Date();
today.setHours(0);
console.log(today);
today.setHours(0, 0, 0, 0);
console.log(today);


//AutoCorrection
console.log(new Date(2020,0,32));//2020-01-31T18:30:00.000Z

console.log(today.setSeconds(today.getSeconds()+70));

//Date to number
let date=new Date();
console.log(+date);

//date can also be subtracted and result is in milliseconds

let start=new Date();
for(let i=0;i<100000;i++)
{
    let product=i*i*i;
}

let end=new Date();

console.log("Result is: "+(end-start));//8

console.log(Date.now());//to measure time


//Date.parse(str) can read date from string
let ms=Date.parse('2019-01-21T13:55:50.437-07:00');
console.log(ms);//1548104150437
