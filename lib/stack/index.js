module.exports = class Stack {
	constructor(arr) {
		this.stack = arr || [];
	}
	push(el) {
		this.stack.push(el);
		return this;
	}
	pop() {
		return this.stack.pop();
	}
	length() {
		return this.stack.length;
	}
};
