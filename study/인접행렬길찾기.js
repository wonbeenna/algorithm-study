// 문제
// 주어진 인접행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환해야 합니다.

// 입력
// 인자 1: matrix
// Array 타입을 요소로 갖는 인접 행렬이 담긴 2차원 배열
// 인자 2: from
// Number 타입의 시작 정점
// 인자 3: to
// Number 타입의 도착 정점
// 출력
// boolean 타입을 리턴해야 합니다.
// 입출력 예시
// const result = getDirections(
// 	[
// 		[0, 1, 0, 0],
// 		[0, 0, 1, 0],
// 		[0, 0, 0, 1],
// 		[0, 1, 0, 0],
// 	],
// 	0,
// 	2
// );
// console.log(result); // true
// 정점 0에서 2로 가는 길이 존재하는지 확인합니다.
// 0 --> 1 로 가는 간선이 존재하고, 1 --> 2 로 가는 간선이 존재하기 때문에 true를 반환합니다.

function getDirections(matrix, from, to) {
  // 큐로 구현해보기
  // 다녀온 길을 큐에 저장

  const queue = [from];
  const enqueue = (n) => queue.push(n);
  const dequeue = (n) => queue.shift();

  const visited = new Array(matrix.length).fill(false);
  visited[from] = true;

  while (queue.length > 0) {
    let now = dequeue();

    if (now === to) {
      // 현재 목적지이면
      return true;
    }
    for (let next = 0; next < matrix[now].length; next++) {
      // 만약, 간선이 있고 방문하지 않았다면
      if (matrix[now][next] && !visited[next]) {
        // queue에 next를 넣습니다. (다음 정점으로 가기 위해)
        enqueue(next);
        // 해당 정점을 방문했다는 것을 표시합니다.
        visited[next] = true;
      }
    }
  }
  // 길이 없다면 false를 반환합니다.
  return false;
}

//////////////////////////////////////////////////////////////

function getDirections(matrix, from, to) {
  let passed = [from]; // 다녀온 길을 저장하는 방법??
  // 다녀온길이 있거나, passed에 없으면 // passed에 저장하고 다시 확인한다?

  while (1) {
    if (matrix[from][to] === 1) {
      return true;
    }
    if (matrix[from].includes(1)) {
      from = matrix[from].indexOf(1);
      if (passed.includes(from)) {
        return false;
      } else {
        passed.push(from);
      }
    } else {
      return false;
    }
  }
}
