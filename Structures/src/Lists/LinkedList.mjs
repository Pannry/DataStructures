import { defaultEquals } from './utils.mjs';
import Node from './Node.mjs';

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined; // Node
        this.equalsFn = equalsFn;
    }

    push(element) {  //
        let node = new Node(element);
        let current;

        if (this.isEmpty()) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== undefined)
                current = current.next;

            current.next = node;
        }

        this.count++;
    }

    insert(element, position) { //
        if (position >= 0 && position <= this.count) {
            let node = new Node(element);

            if (position === 0) {
                let current = this.head;
                node.next = current;
                this.head = node;
            } else {
                let previous = this.getElementAt(position - 1);
                let current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    indexOf(element) { //
        let current = this.head;
        let pos = 0;
        while (current.element != element) {
            if (current.next === undefined) return -1;
            current = current.next;
            pos++;
        }
        return pos;
    }

    getElementAt(index) { // 
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index && current !== undefined; i++)
                current = current.next;
            return current;
        }
        return undefined;
    }

    remove(element) { //
        let pos = this.indexOf(element);
        return this.removeAt(pos);
    }

    removeAt(position) { //
        if (position >= 0 && position < this.count) {
            let current = this.head;
            if (position === 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(position - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
    }

    isEmpty() { //
        return this.size() === 0;
    }

    size() { //
        return this.count;
    }

    getHead() { //
        return this.head;
    }

    toString() {
        let line = "";
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            line += `"${i}": ${current.element}, `;
            current = current.next;
        }
        return `{${line}}`;
    }
}