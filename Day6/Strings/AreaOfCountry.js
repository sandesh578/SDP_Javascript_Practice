/*Create a function that takes a country's name and its area as arguments and returns the
 area of the country's proportion of the total world's landmass.*/

 function areaOfCountry(str,area)
 {
   return `${str} is ${((area*100)/148_940_000).toFixed(2)}% of the total world's landmass`;
 }

 console.log(areaOfCountry("Russia", 17098242));//Russia is 11.48% of the total world's landmas

 console.log(areaOfCountry("USA", 9372610));//USA is 6.29% of the total world's landmass


 console.log(areaOfCountry("Iran", 1648195));//Iran is 1.11% of the total world's landmass