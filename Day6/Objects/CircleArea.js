//area of circle
function Circle(r){
  let obj={
    getArea()
    {
       console.log(+(3.14*Math.pow(r,2)));
    },
    getPerimeter()
    {
      console.log(+(2*3.14*r));
    }
 }
  return obj;
}

let circy = new Circle(11)
circy.getArea();//379.94

let circy1 = new Circle(4.44)
circy1.getPerimeter();//27.883200000000002