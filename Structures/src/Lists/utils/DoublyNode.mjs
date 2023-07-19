import Node from "./Node.mjs";

export default class DoublyNode extends Node {
  constructor(element) {
    super(element);
    this.prev = undefined;
  }
}
