function dijkstra(graph, start) {
  const n = graph.length; // 그래프의 노드 개수
  const distances = Array(n).fill(Infinity); // 시작점에서 각 노드까지의 거리
  const visited = Array(n).fill(false); // 방문 여부
  distances[start] = 0; // 시작 노드의 거리는 0

  for (let i = 0; i < n - 1; i++) {
    // 방문하지 않은 노드 중 가장 짧은 거리를 가진 노드 선택
    let minDistance = Infinity;
    let minNode = -1;

    for (let j = 0; j < n; j++) {
      if (!visited[j] && distances[j] < minDistance) {
        minDistance = distances[j];
        minNode = j;
      }
    }

    if (minNode === -1) {
        break; // 더 이상 방문할 노드가 없으면 종료
    }

    visited[minNode] = true;

    // 선택된 노드와 인접한 노드들의 거리 업데이트
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (graph[minNode][neighbor] !== 0 && !visited[neighbor]) {
        const newDistance = distances[minNode] + graph[minNode][neighbor];
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
        }
      }
    }
  }

  return distances;
}

// 예제: 인접 행렬로 표현된 그래프
// 음의 가중치가 없는 그래프
const graph = [
  [0, 2, 4, 0, 0],
  [2, 0, 1, 7, 0],
  [4, 1, 0, 3, 5],
  [0, 7, 3, 0, 1],
  [0, 0, 5, 1, 0]
];

const startNode = 0;
console.log(dijkstra(graph, startNode));
