// link-list is a liniar datastructure

// var a = 10; 

// link-list is array type data type, but differnce between is: array have spacific objectify id which is index number but link-list store data as node. 

// Node have 2 side, head and tail.Head store pointer and tail store pointer/address of next data. 

class LinkedList {
  constructor (head = null) {
    this.head = head
  }

  append(newNode) {
    let node = this.head;
    console.log(node)
    return newNode;
  }

}

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}


// 10, 20, 30
let noyaLinkList = new LinkedList();
let newNode1 = new Node(10);
console.log(noyaLinkList.append(newNode1))