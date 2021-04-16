//Filter unique array members
function unique(arr) {
   let set=new Set(arr);
    return Array.from(set);
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) );

  //Filter anagrams
  function aclean(arr)
  {
    let map = new Map();

   for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join(''); 
    map.set(sorted, word);
   }

  return Array.from(map.values());
 }
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  console.log(aclean(arr));