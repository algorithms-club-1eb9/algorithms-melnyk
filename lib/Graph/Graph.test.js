const should = require('should');
const algo = require('../index.js');

describe('Graph', () => {
	it('should create andirected graph', () => {});

	it('should return neighbours', () => {
		const graph = algo.Graph();
		graph.addEdge(0, 1);
		graph.addEdge(1, 2);
		graph.addEdge(0, 2);
		graph.addEdge(4, 0);
		graph.addEdge(3, 0);

		const neighbour = graph.adj(0);

		should(neighbour).containEql(2, 1, 4, 3);
		should(neighbour).have.length(4);
	});


	it('should create directed weighted graph', () => {
		const graph = algo.Graph({
			directed: true,
			weighted: true,
		});

		// graph.addEdge(from, to, price);
		graph.addEdge(0, 1, 5);
		graph.addEdge(1, 2, 6);
		graph.addEdge(0, 2, 3);
		graph.addEdge(4, 0, -2);
		graph.addEdge(3, 0, 0);

		const neighbour = graph.adj(0);

		should(neighbour).eql([
			[1, 5],
			[2, 3],
		]);
		should(neighbour).have.length(2);
	});

	describe('bfs', () => {
		it('should go through each vertex in topological order (andirected graph)', () => {
			const graph = algo.Graph();
			graph.addEdge(0, 1);
			graph.addEdge(1, 2);
			graph.addEdge(0, 2);
			graph.addEdge(4, 0);
			graph.addEdge(3, 0);
			graph.addEdge(2, 5);
			graph.addEdge(3, 5);

			const topologicalSorted = [];
			graph.dfs(0, graph, v => topologicalSorted.unshift(v));

			should(topologicalSorted).eql([0, 4, 1, 2, 5, 3]);
		});

		it('should go through each vertex  in topological order (directed and weighted graph)', () => {
			const graph = algo.Graph({
				directed: true,
				weighted: true,
			});

			// graph.addEdge(from, to, price);
			graph.addEdge(0, 1, 5);
			graph.addEdge(1, 2, 6);
			graph.addEdge(0, 2, 3);
			graph.addEdge(4, 0, -2);
			graph.addEdge(3, 0, 0);
			graph.addEdge(2, 3, 2);
			graph.addEdge(3, 4, 2);

			const topologicalSorted = [];
			graph.dfs(0, graph, v => topologicalSorted.unshift(v));

			should(topologicalSorted).eql([0, 1, 2, 3, 4]);
		});

		it.skip('should call action for each element', () => {});
	});
});
