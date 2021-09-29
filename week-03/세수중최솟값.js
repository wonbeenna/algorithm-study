// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)
// ▣ 입력설명
// 첫 번째 줄에 100이하의 세 자연수가 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 수를 출력한다.
// ▣ 입력예제  6 5 11
// ▣ 출력예제  5
function solution(a, b, c) {
  let result;

  if (a < b) {
    result = a;
  } else {
    result = b; // a, b 중 작은 값
  }

  if (c < result) {
    result = c; // a, b 중 작은값과 c 와 비교
  }

  return result;
}

console.log(solution(6, 5, 11));
