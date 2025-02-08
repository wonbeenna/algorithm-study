function shiftToMatch(A, B) {
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        if (A !== B) {
            count++;
            A = A.slice(-1) + A.slice(0, -1); // 문자열 A를 오른쪽으로 한 칸 이동
        } else {
            return count; // A와 B가 같아졌다면 이동 횟수 반환
        }
    }

    return -1; // 모든 회전을 시도해도 같아지지 않으면 -1 반환
}

console.log(shiftToMatch("hello", "lohel"));  // 2
console.log(shiftToMatch("abcdef", "defabc"));  // 3
console.log(shiftToMatch("abc", "cab"));  // 2
console.log(shiftToMatch("abc", "bca"));  // 1
console.log(shiftToMatch("abc", "xyz"));  // -1 (일치 불가능)

function shiftToMatch2(A, B) {
    // B + B를 만들어 A가 포함된 위치를 찾는다.
    // 만약 A가 B+B 안에 포함되지 않으면 indexOf(A)는 -1을 반환.
    // 포함된다면 A가 시작하는 인덱스를 반환 (즉, 몇 번 밀었을 때 A가 B가 되는지 알 수 있음).

    // A = "hello";
    // B = "lohel";
    // console.log((B + B).indexOf(A));  // 결과: 2
    // "lohellohel".indexOf("hello")  // 결과: 2

    return (B + B).indexOf(A);
}

console.log(shiftToMatch2("hello", "lohel"));  // 2
console.log(shiftToMatch2("abcdef", "defabc"));  // 3
console.log(shiftToMatch2("abc", "cab"));  // 2
console.log(shiftToMatch2("abc", "bca"));  // 1
console.log(shiftToMatch2("abc", "xyz"));  // -1 (일치 불가능)
