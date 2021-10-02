// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
// ▣ 입력예제 StuDY
// ▣ 출력예제 sTUdy
// [자바스크립트 알고리즘 문제풀이]

function solution(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      result += s[i].toLowerCase();
    } else if (s[i] === s[i].toLowerCase()) {
      result += s[i].toUpperCase();
    }
  }
  return result;
}
console.log(solution("StuDY"));
