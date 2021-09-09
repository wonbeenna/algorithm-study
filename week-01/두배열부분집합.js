// 문제
// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : base
// number 타입을 요소로 갖는 임의의 배열
// base.length는 100 이하
// 인자 2 : sample
// number 타입을 요소로 갖는 임의의 배열
// sample.length는 100 이하
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의사항
// base, sample 내에 중복되는 요소는 없다고 가정합니다.
// 입출력 예시
// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// let output = isSubsetOf(base, sample);
// console.log(output); // --> true

// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// base = [10, 99, 123, 7];
// sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  let result = false;

  for (let i = 0; i < sample.length; i++) {
    for (let j = i; j < base.length; j++) {
      if (sample[i] === base[j]) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
  }
  return result;
};
