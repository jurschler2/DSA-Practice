/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {

    if (!this.head) return null;

    let temp;

    if (this.length === 1) {
      
      temp = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return temp.val;

    } else {

      let current = this.head;
      let count = 0;

      while (count !== this.length - 2) {
        current = current.next;
        count += 1;
      }

      temp = this.tail;
      this.tail = current;
      this.length -= 1;
      return temp.val;
    }

  }

  /** shift(): return & remove first item. */

  shift() {

    if (!this.head) return null;

    let temp;

    if (this.length === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return temp.val;
    } else {
      temp = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return temp.val
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx >= this.length || idx < 0) return null;

    let count = 0;
    let current = head;

    while (current) {

      if (count === idx) {
        return current.val;
      }
      count += 1;
      current = current.next;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx >= this.length || idx < 0) return null;

    let count = 0;
    let current = this.head;

    while (count !== idx) {
      count++;
      current = current.next;
    }

    current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx > this.length || idx < 0) return null;

    
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    
    let current = this.head;
    let count = 0;
    
    while (count !== idx - 1) {
      count++;
      current = current.next;
    }
    
    let newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;
    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx > this.length - 1 || idx < 0) return null;
  
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let current = this.head;
    let count = 0;
    
    while (count !== idx - 1) {
      count++;
      current = current.next;
    }

    let removed = current.next;
    current.next = current.next.next;
    this.length -= 1;
    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {

    let total = 0;

    if (this.length === 0) return 0;

    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }

  /** print(): returns an array of all itmes in the list */

  print() {

    let output = [];

    if (this.length === 0) return output;

    let current = this.head;

    while (current) {
      output.push(current.val);
      current = current.next;
    }
    return output;
  }
}

module.exports = LinkedList;
