//linked list is data structure consisting of value and next section
//next pointer points to next element and node points to null
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

  console.log(list);//{ value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }

  //it can also be coded as
let Linkedlist = { value: 1 };
Linkedlist.next = { value: 2 };
Linkedlist.next.next = { value: 3 };
Linkedlist.next.next.next = { value: 4 };
Linkedlist.next.next.next.next = null;

//we can also add new item to list
Linkedlist = { value: "New Value", next: Linkedlist };

//we can also remove item from list
Linkedlist.next.next=Linkedlist.next.next.next;

console.log(Linkedlist);