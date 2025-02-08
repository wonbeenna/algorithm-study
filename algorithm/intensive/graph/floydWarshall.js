function floydWarshall(graph) {
  const n = graph.length; // 노드 개수
  const distances = Array.from({ length: n }, (_, i) => [...graph[i]]); // 그래프 복사

  // 플로이드-워셜 알고리즘
  for (let k = 0; k < n; k++) { // 중간 노드
    for (let i = 0; i < n; i++) { // 시작 노드
      for (let j = 0; j < n; j++) { // 도착 노드
        if (distances[i][k] !== Infinity && distances[k][j] !== Infinity) {
          distances[i][j] = Math.min(distances[i][j], distances[i][k] + distances[k][j]);
        }
      }
    }
  }

  // 음수 사이클 확인
  for (let i = 0; i < n; i++) {
    if (distances[i][i] < 0) {
      console.log("음수 사이클");
      return null;
    }
  }

  return distances;
}

// 예제: 인접 행렬로 표현된 그래프 (Infinity는 연결되지 않은 간선)
const graph = [
  [0, 3, Infinity, 5],
  [2, 0, Infinity, 4],
  [Infinity, 1, 0, Infinity],
  [Infinity, Infinity, 2, 0]
];

console.log(floydWarshall(graph));
