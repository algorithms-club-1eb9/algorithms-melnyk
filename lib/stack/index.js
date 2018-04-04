const fs = require('fs');
const text = fs.readFileSync(`${__dirname}/../binary-search/index.js`).toString();

console.log(text);
console.log(text.length);


































class Stack {
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
}


function checkQuotes(text) {
	const stack = new Stack();
	const openQuotes = ['(', '{', '[', ];
	const closeQuotes = [')', '}', ']'];
	let stringMode = false;
	let strQuote;

	for (let i = 0; i < text.length; i += 1) {
		const ch = text[i];

		if (["'", '"', '`'].includes(ch)) {
			if (!stringMode) {
				strQuote = ch;
				stringMode = !stringMode;
			} else if (stringMode && strQuote === ch) {
				stringMode = !stringMode;
				continue;
			}
		}

		if (stringMode) continue;

		console.log(ch, stack.stack);
		const openIndex = openQuotes.indexOf(ch);
		if (openIndex !== -1) {
			stack.push(ch);
			continue;
		}

		const closeIndex = closeQuotes.indexOf(ch);
		if (closeIndex !== -1) {
			const b = stack.pop();
			if (b !== openQuotes[closeIndex]) {
				console.log(b, openQuotes[closeIndex], openQuotes, closeIndex);
				console.log(`Unexpected quotes on ${i}`);
				return;
			}
		}
	}

	if (stack.length()) {
		console.log('Not closed quotes detected');
		return;
	}

	console.log('Quotes fine');
}

checkQuotes(text);
