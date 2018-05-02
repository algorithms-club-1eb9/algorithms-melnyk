const should = require('should');
const algo = require('../index.js');

describe('bfs', () => {
	it('should find path to each vertex', () => {
		const graph = new algo.Graph();
		graph.addEdge(0, 1);
		graph.addEdge(1, 2);
		graph.addEdge(0, 2);
		graph.addEdge(1, 3);
		graph.addEdge(3, 4);
		graph.addEdge(0, 4);

		const shortestPathIndex = algo.bfs(3, graph, () => {});

		should(shortestPathIndex).eql([1, 3, 1, null, 3]);
	});
	it('should call action for each element', () => {});
});
