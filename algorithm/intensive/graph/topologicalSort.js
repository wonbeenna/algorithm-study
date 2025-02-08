function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];
  const result = [];

  function dfs(node) {
    if (visited.has(node)) {
        return;
    }

    visited.add(node);

    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }

    stack.push(node);
  }

  for (const node in graph) {
    dfs(node);
  }

  while (stack.length) {
    result.push(stack.pop());
  }

  return result;
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D"],
  D: []
};

console.log(topologicalSort(graph)); // [ 'A', 'C', 'B', 'D' ]
