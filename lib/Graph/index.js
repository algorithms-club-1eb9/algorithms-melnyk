class Graph {
	constructor() {
		this.adjacency = [];
	}

	addEdge(vertexIndex1, vertexIndex2) {
		this.adjacency[vertexIndex1] = this.adjacency[vertexIndex1]
		? this.adjacency[vertexIndex1].concat(vertexIndex2)
		: [vertexIndex2];

		this.adjacency[vertexIndex2] = this.adjacency[vertexIndex2]
		? this.adjacency[vertexIndex2].concat(vertexIndex1)
		: [vertexIndex1];
	}

	adj(vertexIndex) {
		return this.adjacency[vertexIndex];
	}

	toEdgeList() {
		console.log('Not inplemented');
	}

	dfs(start, graph, actions, visited = []) {
		visited.push(start);

		// [1,2] or [[1,2], [3,4]]
		const neighbors = graph.adj(start);
		if (neighbors) {
			neighbors.forEach(vertex => {
				const v = Array.isArray(vertex) ? vertex[0] : vertex;
				if (!visited.includes(v)) {
					this.dfs((Array.isArray(v) ? v[0] : v), graph, actions, visited);
				}
			});
		}
		actions(start, neighbors, graph);
	}
}

class DiGraph extends Graph {
	addEdge(vertexIndex1, vertexIndex2) {
		this.adjacency[vertexIndex1] = this.adjacency[vertexIndex1]
		? this.adjacency[vertexIndex1].concat(vertexIndex2)
		: [vertexIndex2];
	}
}

class WeightedGraph extends DiGraph {
	addEdge(vertexIndex1, vertexIndex2, weight) {
		this.adjacency[vertexIndex1] = this.adjacency[vertexIndex1]
		? [...this.adjacency[vertexIndex1], [vertexIndex2, weight]]
		: [[vertexIndex2, weight]];
	}
}

module.exports = (options = {}) => {
	if (options.directed && options.weighted) return new WeightedGraph(options);
	if (options.directed) return new DiGraph(options);

	return new Graph(options);
};
