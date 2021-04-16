//Destructuring assignment can also be applied to object
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  console.log(title);  //Menu
  console.log(width);  //100
  console.log(height); //200

  let { title:t,width: w, height: h} = options;
  console.log(t);  //Menu
  console.log(w);  //100
  console.log(h); //200

  //Default values cn also be assigned
  let values={
     one:1,
     two:2,
     three:4
  };

  let {first,second,third,four=7}=values;
  console.log(four);//7

  let rec={
      length:5
  };

  //combining colon and equality
  let {length:l=9,breadth:b=20,height:p=10}=rec;

  console.log(l);//5
  console.log(b);//20
  console.log(p);//10

  //rest pattern “…”
  let distance={
      delhi:2,
      goa:5,
      mumbai:8
  };

  let {delhi,...rest}=distance;
  console.log(rest.goa);//5
  console.log(rest.mumbai);//8

  //wrapping in parenthesis to show its not code block
  let name1,name2;

  ({name1,name2}={name1:"Sandesh",name2:"Sangam"});

  console.log(name1);
  console.log(name2);

//nested object destructing
  let option = {
    prop: {
      thick: 100,
      tall: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };

  let {
    prop:{
        thick,
        tall
    },
    items:[item1,item2],
    extra:bool,
  }=option;

  console.log(thick);//100
  console.log(tall);//200
  console.log(item1);//Cake
  console.log(item2);//Donut
  console.log(bool);//true

  //complex destructing with colon mapping and nested objects
  let choices = {
    title: "My menu",
    items: ["Pancake", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100, 
    height: h = 200,
    items: [item1, item2]
  }) {
    console.log(`title:${title}`);//title:My menu
    console.log("width "+w);//width 100
    console.log(item1);//Pancake
  }
  
  showMenu(choices);
