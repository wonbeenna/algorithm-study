function bellmanFord(graph, start) {
  const n = graph.length; // 노드 개수
  const distances = Array(n).fill(Infinity); // 시작점에서 각 노드까지의 거리
  distances[start] = 0; // 시작점 거리 초기화

  // 모든 간선에 대해 (n-1)번 반복
  for (let i = 0; i < n - 1; i++) {
    for (let u = 0; u < n; u++) {
      for (let v = 0; v < n; v++) {
        if (graph[u][v] !== 0 && distances[u] + graph[u][v] < distances[v]) {
          distances[v] = distances[u] + graph[u][v];
        }
      }
    }
  }

  // 음수 사이클 확인
  for (let u = 0; u < n; u++) {
    for (let v = 0; v < n; v++) {
      if (graph[u][v] !== 0 && distances[u] + graph[u][v] < distances[v]) {
        console.log("음수 사이클");
        return null;
      }
    }
  }

  return distances;
}

// 예제: 인접 행렬로 표현된 그래프 (음수 가중치 포함)
const graph = [
  [0, -1, 4, 0, 0],
  [0, 0, 3, 2, 2],
  [0, 0, 0, 0, 0],
  [0, 1, 5, 0, 0],
  [0, 0, 0, -3, 0]
];

const startNode = 0;
console.log(bellmanFord(graph, startNode));
