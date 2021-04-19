function greet(phrase)
{
    console.log(phrase+" "+this.name+"!!");
}

let user1={
    name:"Sandesh Parajuli"
};

let user2={
    name:"Albanero"
};

greet.call(user1,"Hello");

greet.call(user2,"Hii");