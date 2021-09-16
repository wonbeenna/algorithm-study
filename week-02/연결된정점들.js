// 문제
// 방향이 없는 간선들의 목록이 주어질 때, 연결된 정점의 컴포넌트(그룹들)가 몇 개인지 반환하는 함수를 작성하세요.

// 입력
// 인자 1: edges
// 2차원 Array 타입을 요소로 갖는 시작과 도착 정점이 담겨있는 배열들을 담고 있는 목록 (2차원 배열)
// ex) [[0, 1], [1, 2], [3, 4]]
// 출력
// Number 타입을 리턴해야 합니다.
// 연결된 정점의 컴포넌트의 수를 숫자로 반환합니다.
// 주의사항
// 주어진 간선은 무향입니다
// [1, 2] 는 정점 1에서 정점 2로도 갈 수 있으며, 정점 2에서 정점 1로도 갈 수 있습니다.
// 입출력 예시
// const result = connectedVertices([
// 	[0, 1],
// 	[2, 3],
// 	[4, 5],
// ]);
// console.log(result); // 3

// const result = connectedVertices([
// 	[0, 1],
// 	[2, 3],
// 	[3, 4],
// 	[3, 5],
// ]);
// console.log(result); // 2

function connectedVertices(edges) {
  // 작은 배열안에 요소는 2개 [시작, 도착]
  // 완전새로운, 작을 배열 요소 1개 중복, 2개 중복,
  // 일단 배열에 모든 요소를 확인

  let result = [edges[0]];

  for (let i = 1; i < edges.length; i++) {
    let combined = [];
    for (let j = 0; j < result.length; j++) {
      if (result[j].includes(edges[i][0]) || result[j].includes(edges[i][1])) {
        result[j] = [...result[j], ...edges[i]];
        combined.push(j);
      }
    }
    if (combined.length > 1) {
      result[combined[0]] = [...result[combined[0]], ...result[combined[1]]];
      result.pop();
    } else if (combined.length < 1) {
      result.push(edges[i]);
    }
  }
  return result.length; //[[0, 1],[2, 3, 3, 4, 3, 5]]
}

// edges = [0, 1], [2, 3], [3, 4], [3, 5]
