let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

 //using iteration 
function printReverseList(list)
{
    let arr=new Array();
    let temp=list;
    console.log("Elemetns in list in reverse order ar:");
    while(temp!=null)
    {
        arr.push(temp.value);
        temp=temp.next;
    }
    for(let i=arr.length-1;i>=0;i--)
    {
        console.log(arr[i]);
    }
}

printReverseList(list);


//using recursion
console.log("Elemetns in list in reverse order are:");
function printReverseListRecursion(list)
{
    if(list.next!=null)
    {
        printReverseListRecursion(list.next);
    }
    console.log(list.value);
}

printReverseListRecursion(list);