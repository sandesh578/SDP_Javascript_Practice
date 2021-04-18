//set and decrease for counter
function makeCounter()
{
    let value=0;
    function counter()
    {
        return value++;
    }
    counter.set= (val) => value=val;

    counter.decrease= () => value--;

    return counter;
}

let counter = makeCounter();
console.log(counter.set(5));//5
console.log(counter.decrease());//5

//Sum with an arbitrary amount of brackets
function sum(n){

    let currSum=n;

    function f1(n1)
    {
        currSum+=n1;
        return f1;
    }

    f1.toString = function() {
        return currSum;
      };

    return f1;
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15