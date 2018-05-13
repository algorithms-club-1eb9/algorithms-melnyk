module.exports = (graph, start) => {
	const from = [];
	const weight = [];
	const topologicalSorted = [];

	from[start] = null;
	weight[start] = 0;
	graph.dfs(start, graph, v => topologicalSorted.unshift(v));

	topologicalSorted.forEach(v => {
		const neighbours = graph.adj(v);
		if (!neighbours) return;

		neighbours.forEach(n => {
			const totalWeight = (weight[v] || 0) + n[1];
			if (!weight[n[0]] || weight[n[0]] > totalWeight) {
				weight[n[0]] = totalWeight;
				from[n[0]] = v;
			}
		});
	});

	return from;
};
