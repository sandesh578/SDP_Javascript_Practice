//strings,array as well as colections(set,list ) are iterable
let range={
    from:1,
    to:8
};

range[Symbol.iterator]=function()
{
    return{
       current:this.from,
       last:this.to,
       next()
       {
           if(this.current<=this.last)
           {
               return {done:false,value:this.current++};
           }
           else
           {
               return {done:true};
           }
       }
    };
}

for(let num of range)
{
    console.log(num);
}

/*
//can also be used together
let range = {
  from: 1,
  to: 8,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); 
}
*/

//Strings are also iterable

let str="Sandesh";
for(let ch of str)
{
    console.log(ch);
}


//iterator can also be called explicitly
let name="Albanero";

let iterator=name[Symbol.iterator]();

while(true)
{
    let result=iterator.next();
    if(result.done)
    {
        break;
    }
    console.log(result.value);
}