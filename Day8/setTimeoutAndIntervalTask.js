//What will setTimeout show?
let i = 0;

//for 100ms loop will be executed and  i value will incremented and reaches 100000000
setTimeout(() => console.log(i), 100); //100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}

//Zero delay is in fact not zero in a browser because after 5 nested calls the interval wil be 4ms forcefully
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start);

  if(start + 100 < Date.now()) 
  {
      console.log(times); 
  }
  else 
  {
      setTimeout(run); 
  }
});
/*
Output
[
   14, 17, 22, 33, 40, 49,
   49, 56, 67, 75, 85, 93,
  105
]
*/
