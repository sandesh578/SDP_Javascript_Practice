function add(num1,num2)
{
    return num1+num2;
}

function substract(num1,num2)
{
    return num1-num2;
}

function multiply(num1,num2)
{
    return num1*num2;
}

function divide(num1,num2)
{
    return num1/num2;
}

// module.exports.add=add;
// exports.substract=substract;//var exports=module.exports is present by default
// exports.multiply=multiply;
// exports.divide=divide;

module.exports={
   add,
   substract,
   multiply,
   divide
};