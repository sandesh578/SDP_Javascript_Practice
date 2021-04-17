//Parity Bit Validation

function validateBinary(str)
{
   let num=parseInt(str);
   let count=0;
   let last=num%10;

   for(let i=0;i<str.length-1;i++)
   {
      if(str.charAt(i)==1)
      {
          count++;
      }
   }

   if(last==0&&(count%2==0))
   {
       return true;
   }
   else if(last==1&&(count%2==1))
   {
       return true;
   }
   else
   {
      return false;
   }
}

console.log(validateBinary("10110010"));//true

console.log(validateBinary("11000000"));//true

console.log(validateBinary("11000001"));//false

console.log(validateBinary("00101101"));//true