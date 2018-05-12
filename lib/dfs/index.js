
const visited = [];

module.exports = function dfs(start, graph, actions) {



	if (visited.includes(start)) return;
	visited.push(start);

	const neighbors = graph.adj(start);
	// [1,2]
	actions(start, neighbors, graph);
	neighbors.forEach(v => dfs(v, graph, actions));
};
