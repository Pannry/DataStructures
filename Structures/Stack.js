class Stack {
    constructor() {
        this.items = [];
    }

    push(elements) {
        this.items.push(elements);
    }

    show() {
        console.log(this.items);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        return this.items = [];
    }
}

let a = new Stack();
a.push(1);
a.push(2);
a.push(3);

console.log(a.size());
