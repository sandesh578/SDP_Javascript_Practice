//Recursion splits task into similar smaller tasks of similar kinds,but smaller
//recursive solution is shorter than iterative 
//Power of function using recursion
function pow(x,n)
{
    if(n==1)//base condition
    {
        return x;
    }
    else
    {
       return x*pow(x,n-1);//recursive step
    }
}

console.log(pow(5,2));

//maximum number of recursive calls including first one is recursive depth
//iterative alogorithm consumes less memory than recursion

//iterative method
function Pow(x, n) {
    let power=1;
    for (let i=0;i<n;i++) {
      power*= x;
    }

    return power;
  }

  console.log(Pow(7,2));//49


  //recursive cal to object
  let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  function sumSalaries(department) {
    if (Array.isArray(department)) {//base case
      return department.reduce((prev, current) =>{
        return prev + current.salary
      },0); 
    } else { //recursive step
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); 
      }
      return sum;
    }
  }
  
console.log(sumSalaries(company)); //7700