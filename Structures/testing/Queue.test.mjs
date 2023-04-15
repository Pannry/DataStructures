import Queue from '../src/Queue.mjs';
let queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue('Jonh');
queue.enqueue('Jack');

console.log(queue.toString());

queue.enqueue('Cammila');

console.log(queue.toString());

console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty());
