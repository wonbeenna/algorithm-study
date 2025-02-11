function findConsecutiveNumbersPure(num, total) {
    let start = 0;

    while (true) {
        let sum = 0;
        let result = [];

        // 연속된 num개의 숫자를 더하면서 배열 생성
        for (let i = 0; i < num; i++) {
            result.push(start + i);
            sum += (start + i);
        }

        // 합이 total이면 결과 반환
        if (sum === total) {
            return result;
        }

        // 아니라면 start를 증가하여 다시 탐색
        start++;
    }
}

// ✅ 테스트 실행
console.log(findConsecutiveNumbersPure(3, 12)); // [3, 4, 5]
console.log(findConsecutiveNumbersPure(5, 15)); // [1, 2, 3, 4, 5]
console.log(findConsecutiveNumbersPure(4, 14)); // [2, 3, 4, 5]
console.log(findConsecutiveNumbersPure(2, 3));  // [1, 2]
console.log(findConsecutiveNumbersPure(3, 6));  // [1, 2, 3]

function findConsecutiveNumbersGauss(num, total) {
    // 가우스 공식
    // S = (n + 1) * (n + 2) / 2

    let start = ((2 * total / num) - (num - 1)) / 2; // 가우스 공식으로 첫 번째 숫자 구하기
    return Array.from({ length: num }, (_, i) => start + i); // 연속된 숫자 배열 생성
}

// ✅ 테스트 실행
console.log(findConsecutiveNumbersGauss(3, 12)); // [3, 4, 5]
console.log(findConsecutiveNumbersGauss(5, 15)); // [1, 2, 3, 4, 5]
console.log(findConsecutiveNumbersGauss(4, 14)); // [2, 3, 4, 5]
console.log(findConsecutiveNumbersGauss(2, 3));  // [1, 2]
console.log(findConsecutiveNumbersGauss(3, 6));  // [1, 2, 3]
