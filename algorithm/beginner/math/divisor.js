// 약수
function divisor(num) {
    const divisors = [];

    for(let i = 1 ; i <= Math.sqrt(num); i++){ // 절반이 아니라 sqrt(num)까지 검사 (최적화)
        if(num % i === 0) {
            divisors.push(i);

            if (i !== num / i) {
                divisors.push(num / i); // 짝수 쌍 추가
            }
        }
    }

    return divisors.sort((a, b) => a - b); // 정렬하여 작은 값부터 탐색
}


// ✅ 테스트
console.log(divisor(12)); // [1, 2, 3, 4, 6, 12]
console.log(divisor(16)); // [1, 2, 4, 8, 16]
console.log(divisor(32)); // [1, 2, 4, 8, 16, 32]
console.log(divisor(49)); // [1, 7, 49]

