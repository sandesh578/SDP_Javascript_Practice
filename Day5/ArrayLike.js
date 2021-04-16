//Array like have indexes and length
let ArrayLike={
   0:"Sandesh",
   1:"Parajuli",
   2:"Sangam",
   length:3
};
//Array.from converts iterable or arrayLike and converts into real array
let arr=Array.from(ArrayLike);
//console.log(arr.pop());
for(let num of arr)
{
    console.log(num);
}

let range={
    from:1,
    to:5,
    [Symbol.iterator]()
    {
        this.current=this.from;
        return this;
    },
    next()
    {
        if(this.current<=this.to)
        {
            return {done:false,value:this.current++};
        }
        else
        {
            return {done:true};
        }
    }
};

let arr1=Array.from(range);
for(let num of arr1)
{
    console.log(num);
}

//second argument is a mapfn function that maps ecah element and modifies as per condition
let arr2=Array.from(range,num=>num*2);
for(let num of arr2)
{
    console.log(num);
}

let name="Albanero";
let chars=Array.from(name);

console.log(chars[0]);//A
console.log(chars[1]);//l
console.log(chars[2]);//b
console.log(chars.length);//8


let lan="JavaSript";
let char=[]; // Array.from internally does the same loop
for(let ch of lan)
{
    char.push(ch);
}
console.log(char);//prints array of characters of lan


//surrogate-aware slice
function slice(str,start,end)
{
    return Array.from(str).slice(start,end).join('-');
}

let app="Slack";

console.log(slice(app,1,3));//l-a