module.exports = (startIndex, graph, action) => {
	const q = [startIndex];
	const visited = [];
	const from = [];
	from[startIndex] = null;

	while (q.length) {
		const currentIndex = q.shift();
		const nbrs = graph.adj(currentIndex);
		visited.push(currentIndex);

		nbrs
			.filter((vertexIndex) => !visited.includes(vertexIndex) && !q.includes(vertexIndex))
			.forEach((vertexIndex) => {
				q.push(vertexIndex);
				from[vertexIndex] = currentIndex;
			});

		if (action) {
			action(currentIndex);
		}
	}

	return from;
};
