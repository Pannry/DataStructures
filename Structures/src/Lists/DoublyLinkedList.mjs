import { defaultEquals } from "./utils/DefaultEquals.mjs";
import Node from "./utils/DoublyNode.mjs";

export default class DoublyLinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined; // Node
    this.equalsFn = equalsFn;
  }

  push(element) {
    let node = new Node(element);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }

    this.count++;
  }

  insert(element, position) {}

  indexOf(element) {}

  getElementAt(index) {}

  remove(element) {}

  removeAt(position) {}

  isEmpty() {
    return this.count === 0;
  }

  size() {}

  getHead() {}

  toString() {
    let line = "";
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      line += `"${i}": ${current.element}, `;
      current = current.next;
    }
    line = line.substring(0, line.length - 2);
    return `{${line}}`;
  }
}
