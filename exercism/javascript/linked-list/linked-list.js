//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(value) {
    const newNode = { value, next: null, prev: null };
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this.tail.value;
  }
  pop() {
    const removed = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return removed.value;
  }
  unshift(value) {
    const newNode = { value, next: null, prev: null };
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    return this.tail.value;
  }
  shift() {
    const removed = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
    }
    return removed.value;
  }
  delete(value) {
    let curNode = this.head;
    while (curNode && curNode.value !== value) {
      curNode = curNode.next;
    }
    if (!curNode) {
      return curNode;
    }
    if (curNode.prev === null) {
      this.shift();
    } else if (curNode.next === null) {
      this.pop();
    } else {
      curNode.prev.next = curNode.next;
      curNode.next.prev = curNode.prev;
    }
    return curNode.value;
  }
  count() {
    let count = 0;
    let curNode = this.head;
    while (curNode) {
      count++;
      curNode = curNode.next;
    }
    return count;
  }
}
