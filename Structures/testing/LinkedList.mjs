import LinkedList from "../src/Lists/LinkedList.mjs";
let ll = new LinkedList();

console.log(ll.toString());

ll.push(0);
ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);
ll.push(60);
ll.push(70);

console.log(ll.indexOf(40));
