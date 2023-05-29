import Stack from "../src/Stack.mjs";

let stack = new Stack();

console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());
console.log(stack.toString());

stack.push(11);

console.log(stack.size());
console.log(stack.isEmpty());

stack.pop();
stack.pop();

console.log(stack.size());
console.log(stack.toString());
