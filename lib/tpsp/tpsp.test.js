const should = require('should');
const algo = require('../index.js');

describe('tpsp', () => {
	it('should find shortest path to each vertex', () => {
		const graph = algo.Graph({
			directed: true,
			weighted: true,
		});

		graph.addEdge(0, 1, 5);
		graph.addEdge(1, 2, 6);
		graph.addEdge(0, 2, 3);
		graph.addEdge(4, 0, -2);
		graph.addEdge(3, 0, 0);

		const spIndex = algo.tpsp(graph, 0);
		should(spIndex).eql([null, 0, 0]);
	});

	it('should find shortest path to each vertex2', () => {
		const graph = algo.Graph({
			directed: true,
			weighted: true,
		});

		graph.addEdge(0, 1, 1);
		graph.addEdge(0, 3, 4);
		graph.addEdge(1, 2, 3);
		graph.addEdge(1, 4, 8);
		graph.addEdge(2, 5, -7);
		graph.addEdge(2, 4, 11);
		graph.addEdge(3, 6, 4);
		graph.addEdge(3, 7, 7);
		graph.addEdge(4, 3, 10);
		graph.addEdge(4, 7, 5);
		graph.addEdge(4, 8, 2);
		graph.addEdge(5, 8, 12);
		graph.addEdge(6, 7, 6);
		graph.addEdge(7, 8, -3);

		const spIndex = algo.tpsp(graph, 0);
		should(spIndex).eql([null, 0, 1, 0, 1, 2, 3, 3, 7]);
	});
	it.skip('should call action for each element', () => {});
});

