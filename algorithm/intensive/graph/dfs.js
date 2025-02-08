function dfsRecursive(graph, start, visited = new Set()) {
    // 방문한 노드를 기록
    visited.add(start);

    console.log(visited);
    // 이웃 노드 순회
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited); // 재귀 호출
        }
    }
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};

dfsRecursive(graph, "A");


// 인접 행렬 생성
function createAdjacencyMatrix(graph) {
    const nodes = Object.keys(graph);
    const matrix = Array(nodes.length)
        .fill(null)
        .map(() => Array(nodes.length).fill(0));

    nodes.forEach((node, i) => {
        graph[node].forEach((neighbor) => {
            const j = nodes.indexOf(neighbor);
            matrix[i][j] = 1;
        });
    });

    return matrix;
}

console.log(createAdjacencyMatrix(graph));
