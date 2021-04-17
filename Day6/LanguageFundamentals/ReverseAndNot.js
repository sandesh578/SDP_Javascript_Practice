/*Write a function that takes an integer i and returns an integer with
 the integer backwards followed by the original integer.
To illustrate:
123
We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.
*/

function reverseAndNot(num)
{
    let rev=0;
    let n=num;
    let str='';
    while(num>=1)
    {
        rev=rev*10+(num%10);
        num=Math.floor(num/10);
    }
    str=rev+`${n}`;
    return parseInt(str);
}

console.log(reverseAndNot(123));// 321123

console.log(reverseAndNot(152));// 251152

console.log(reverseAndNot(123456789));// 987654321123456789