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

    let popper;

    if (this.length < 1) {
      return null;
    } else if (this.length === 1) {
      popper = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let count = 0;
      let cur = this.head;
      while (count !== this.length - 2) {
        cur = cur.next;
      }
      popper = this.tail;
      cur.next = null;
      this.tail = cur;
    }
    this.length -= 1;
    return popper.val;
  }

  /** shift(): return & remove first item. */

  shift() {

    let shifter;

    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      shifter = this.head;
      this.head = null;
      this.tail = null;
    } else {
      shifter = this.head;
      this.head = this.head.next;
    }
    this.length -= 1;
    return shifter.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx >= this.length || idx < 0) return null;

    let count = 0;
    let temp = this.head;

    while (count !== idx) {
      temp = temp.next;
      count++;
    }
    return temp.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx >= this.length || idx < 0) return null;

    let count = 0;
    let temp = this.head;

    while (count !== idx) {
      temp = temp.next;
      count++;
    }
    temp.val = val;
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

    if (idx >= this.length || idx < 0) return null;

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let count = 0;
    let temp = this.head;
    let rem;

    while (count !== idx - 1) {
      temp = temp.next
      count++;
    }
    rem = temp.next;
    temp.next = temp.next.next;
    this.length -= 1;
    return rem.val;

  }

  /** average(): return an average of all values in the list */

  average() {

    if (!this.head) return 0;

    let sum = 0;
    let temp = this.head;

    while (temp) {
      sum += temp.val;
      temp = temp.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
