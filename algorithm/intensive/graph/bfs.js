function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length) {
    const vertex = queue.shift();
    console.log(vertex);

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
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

bfs(graph, "A"); // A B C D G H I E F J


function bfs2(grid, start) {
  let rows = grid.length;
  let cols = grid[0].length;
  let queue = [start]; // 시작 지점 큐에 추가
  let visited = new Set(); // 방문한 좌표 저장
  visited.add(start.toString()); // 좌표를 문자열로 저장 (ex: "0,0")

  let directions = [
    [0, 1],  // 오른쪽 이동
    [0, -1], // 왼쪽 이동
    [1, 0],  // 아래 이동
    [-1, 0]  // 위 이동
  ];

  while (queue.length > 0) {
    let [r, c] = queue.shift(); // 큐에서 현재 위치 꺼내기
    console.log(`방문: (${r}, ${c})`);

    for (let [dr, dc] of directions) {
      let nr = r + dr;
      let nc = c + dc;

      // 범위 체크 & 방문 확인 & 장애물 확인 (예: 'X'가 장애물이라면)
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited.has(`${nr},${nc}`) && grid[nr][nc] !== "X") {
        queue.push([nr, nc]);
        visited.add(`${nr},${nc}`);
      }
    }
  }

  console.log(visited)
}

// 예제
let grid = [
  ["O", "O", "X", "O"],
  ["O", "X", "O", "O"],
  ["O", "O", "X", "X"],
  ["X", "O", "O", "O"]
];

bfs2(grid, [0, 0]); // (0,0)에서 시작하여 BFS 탐색