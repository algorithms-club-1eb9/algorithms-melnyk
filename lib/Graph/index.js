module.exports = class Graph {
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
};
