/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    for (let i = 0; i < edges.length; i++) {
        for (let j = 0; j < edges[0].length; j = j + 2) {
            if ((edges[i][j] == source && edges[i][j + 1] == destination) || (edges[i][j] == destination && edges[i][j + 1] == source)) {
                return true;
            }
        }
    }
  // Create adjacency list from the edges
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) { 
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Set();

    function dfs(node) {
        if (node === destination) {
            return true;
        }
        
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }
        
        return false;
    }

    return dfs(source);
};