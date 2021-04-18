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
function printList(list)
{
    let temp=list;
    console.log("Elemetns in list are:");
    while(temp!=null)
    {
        console.log(temp.value);
        temp=temp.next;
    }
}

printList(list);


//using recursion
console.log("Elemetns in list are:");
function printListRecursion(list)
{
    console.log(list.value);
    if(list.next!=null)
    {
        printListRecursion(list.next);
    }
}

printListRecursion(list);