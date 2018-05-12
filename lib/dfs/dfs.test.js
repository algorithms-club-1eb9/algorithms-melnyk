const should = require('should');
const algo = require('../index.js');

describe('bfs', () => {
	it('should find path to each vertex', () => {
		const graph = new algo.Graph();
		graph.addEdge(0, 1);
		graph.addEdge(1, 2);
		graph.addEdge(0, 2);
		graph.addEdge(4, 0);
		graph.addEdge(3, 0);
		graph.addEdge(2, 5);
		graph.addEdge(3, 5);

		const topologicalSorted = [];
		algo.dfs(0, graph, v => topologicalSorted.push(v));

		should(topologicalSorted).eql([0, 1, 2, 5, 3, 4]);
	});
	it.skip('should call action for each element', () => {});
});
