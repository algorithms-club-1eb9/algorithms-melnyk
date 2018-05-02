// const fs = require('fs');
// const text = fs.readFileSync(`${__dirname}/../binary-search/index.js`).toString();

module.exports = function checkQuotes(text) {
	const stack = new Stack();
	const openQuotes = ['(', '{', '['];
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

		const openIndex = openQuotes.indexOf(ch);
		if (openIndex !== -1) {
			stack.push(ch);
			continue;
		}

		const closeIndex = closeQuotes.indexOf(ch);
		if (closeIndex !== -1) {
			const b = stack.pop();
			if (b !== openQuotes[closeIndex]) {
				return;
			}
		}
	}

	if (stack.length()) {
		console.log('Not closed quotes detected');
		return;
	}
	console.log('Quotes fine');
};

// checkQuotes(text);
