function primMST(graph) {
  const n = graph.length;
  const visited = Array(n).fill(false);
  const mst = [];
  const minEdge = Array(n).fill(Infinity);
  const parent = Array(n).fill(-1);

  minEdge[0] = 0; // Start from node 0

  for (let i = 0; i < n - 1; i++) {
    let u = -1;

    // 최소 가중치 간선 찾기
    for (let v = 0; v < n; v++) {
      if (!visited[v] && (u === -1 || minEdge[v] < minEdge[u])) {
        u = v;
      }
    }

    visited[u] = true;

    // 간선을 MST에 추가
    if (parent[u] !== -1) {
      mst.push([parent[u], u, minEdge[u]]);
    }

    // 인접 노드의 최소 가중치 업데이트
    for (let v = 0; v < n; v++) {
      if (graph[u][v] !== 0 && !visited[v] && graph[u][v] < minEdge[v]) {
        minEdge[v] = graph[u][v];
        parent[v] = u;
      }
    }
  }

  return mst;
}

const graph = [
  [0, 4, 3, 0, 0, 0],
  [4, 0, 1, 2, 0, 0],
  [3, 1, 0, 4, 0, 0],
  [0, 2, 4, 0, 2, 0],
  [0, 0, 0, 2, 0, 6],
  [0, 0, 0, 0, 6, 0]
];

console.log(primMST(graph));
