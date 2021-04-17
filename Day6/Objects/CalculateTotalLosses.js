/*You just returned home to find your mansion has been robbed! Given an object of the stolen items,
 return the total amount of the burglary (number).
 If nothing was robbed, return the string "Lucky you!".*/

 function totalLosses(obj)
 {
    let sum=0;
    if(Object.keys(obj).length===0)
    {
        return "Lucky you!";
    }
    else
    {
        for(let val of Object.values(obj))
        {
            sum+=val;
        }
    }
    return sum;
 }

 const stolenItems1 = {
    tv: 30,
    skate: 20,
    stereo: 50,
  };

  console.log(totalLosses(stolenItems1));//100
  
  const stolenItems2 = {
    painting: 20000,
  };

  console.log(totalLosses(stolenItems2));//20000
  
  const stolenItems3 = {};

  console.log(totalLosses(stolenItems3));//Lucky you!
  