// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.
// 입력
// 인자 1 : str
// string 타입의 공백이 있는 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 단어는 공백으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 입출력 예시
// let output1 = letterCapitalize('hello world');
// console.log(output1); // "Hello World"
// let output2 = letterCapitalize('javascript  is sexy ');
// console.log(output2); // "Javascript  Is Sexy "

function letterCapitalize(str) {
  if (str === "") {
    return "";
  }

  let result = str[0].toUpperCase(); // 맨처음 문자는 무조건 대문자

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase(); // 단어 앞에 공백이 있으면 그 다음 문자는 대문자
    } else {
      result += str[i];
    }
  }
  return result;
}
