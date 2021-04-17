/*An array is special if every even index contains an even number and every odd index contains an odd number.
 Create a function that returns true if an array is special, and false otherwise.*/

 function isSpecialArray(arr)
 {
     for(let i=0;i<arr.length;i++)
     {
        if(i%2==0)
        {
           if(arr[i]%2!=0)
           {
               return false;
           }
        }
        else
        {
            if(arr[i]%2==0)
            {
                return false;
            }
        } 
     }
     return true;
 }

 console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));;//true

 console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));//false

 console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));//false