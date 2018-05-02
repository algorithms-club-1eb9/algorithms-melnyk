const should = require('should');
const algo = require('../index.js');

describe('Graph', () => {
	it('should return neighbours', () => {
		const graph = new algo.Graph();
		graph.addEdge(0, 1);
		graph.addEdge(1, 2);
		graph.addEdge(0, 2);
		graph.addEdge(4, 0);
		graph.addEdge(3, 0);

		const neighbour = graph.adj(0);

		should(neighbour).containEql(2, 1, 4, 3);
		should(neighbour).have.length(4);
	});
});
