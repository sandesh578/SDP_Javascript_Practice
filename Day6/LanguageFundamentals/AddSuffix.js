//Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

function add_suffix(str)
{
    return (str1)=>str1+""+str;
}

let add_ly = add_suffix("ly");

console.log(add_ly("total"));//totally

console.log(add_ly("hopeless"));//hopelessly

let add_less = add_suffix("less");

console.log(add_less("fear"));//fearless

console.log(add_less("ruth"));//