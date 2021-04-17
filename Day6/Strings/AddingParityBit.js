//Adding Parity Bits

function addParityBit(str)
{
    let count=0;
   for(let i=0;i<str.length;i++)
   {
       if(str.charAt(i)==1)
       {
           count++;
       }
   }
   if(count%2==0)
   {
       return str+"0";
   }
   else
   {
    return str+"1";
   }
}

console.log(addParityBit("0110000"));//01100000

console.log(addParityBit("0101101"));//01011010

console.log(addParityBit("1111111"));//11111111