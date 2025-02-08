function kruskalMST(graph) {
  // Union-Find를 위한 parent 배열
  const parent = Array.from({ length: graph.length }, (_, i) => i);

  // Find 함수: 부모 노드를 찾음
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]); // 경로 압축
    }
    return parent[x];
  }

  // Union 함수: 두 노드를 연결
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootY] = rootX; // 한쪽을 다른 쪽의 부모로 설정
    }
  }

  // 간선을 가중치 기준으로 정렬
  graph.sort((a, b) => a[2] - b[2]); // [노드1, 노드2, 가중치]

  const mst = []; // 최소 신장 트리 저장
  for (const [u, v, weight] of graph) {
    // 두 노드가 같은 그룹에 있지 않으면 간선 추가
    if (find(u) !== find(v)) {
      union(u, v);
      mst.push([u, v, weight]);
    }
  }

  return mst;
}

const graph = [
    [1,2,4], // [노드1, 노드2, 가중치]
    [1,3,3],
    [1,4,5],
    [2,3,6],
    [2,5,2],
    [3,5,1],
    [3,6,1],
    [3,4,2],
    [4,6,3],
    [5,6,4],
];

console.log(kruskalMST(graph));
