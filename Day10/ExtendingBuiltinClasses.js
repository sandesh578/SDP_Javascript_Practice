//we can also inherit built in classes like array map
//But in case of built in array we can inherit static methods and properties
class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  
  let arr = new PowerArray(1, 2, 5, 10, 50);

  console.log(arr.constructor === PowerArray);//true

  console.log(arr.isEmpty());//false
  
  let filteredArr = arr.filter(item => item >= 10);
  console.log(filteredArr);//PowerArray(2) [ 10, 50 ]
  console.log(filteredArr.isEmpty());//false