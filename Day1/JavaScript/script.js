//'use strinct'  //used to run the code in modern way
//alert("I am a JavaScript User");

//[1, 2].forEach(alert); //Displays alert for both 1 and 2 after we click ok

let name = prompt("Enter your name", ""); //take user input
let isNameCorrect = confirm("Is your name " + name + " ?"); //returns boolean value

if (isNameCorrect) {
    alert(name + " is  correct");
} else {
    alert(name + " is not correct");
}

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12