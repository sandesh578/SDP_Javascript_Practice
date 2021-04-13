let i = 3;

while (i) {
  console.log( i-- );
}
//last value is 0 as zero is false loop terminates



//for (let i = 0; i < 5; ++i) console.log( i );//1-4

//for (let i = 0; i < 5; i++) console.log( i );//1-4

/*
let j = 0;
while (j < 3) {
  console.log( `number ${j}!` );
  j++;
}*/

let browser='Safari';
  if(browser == 'Edge') {
    console.log("You've got the Edge!");
  } else if (browser == 'Chrome'|| browser == 'Firefox'|| browser == 'Safari'|| browser == 'Opera') {
    console.log( 'Okay we support these browsers too' );
  } else {
    console.log( 'We hope that this page looks ok!' );
  }

  //arrow function
  function ask(question, yes, no) {
    if (question=='Yes') yes();
    else no();
  }
  
  ask(
    "Yes",
    ()=>{ console.log("You agreed."); },
    ()=>{ console.log("You canceled the execution."); }
  );//You agreed