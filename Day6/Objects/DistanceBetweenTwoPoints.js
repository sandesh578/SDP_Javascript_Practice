
//Distance between two points

function getDistance(obj,obj1)
{
   let distance=Math.sqrt(Math.pow((parseInt(obj1.x)-parseInt(obj.x)),2)+Math.pow((parseInt(obj1.y)-parseInt(obj.y)),2));
   return distance.toFixed(3);
}

console.log(getDistance({x: -2, y: 1}, {x: 4, y: 3}));//6.325

console.log(getDistance({x: 0, y: 0}, {x: 1, y: 1}));//1.414

console.log(getDistance({x: 10, y: -5}, {x: 8, y: 16}));//21.095