function primeFactorization(n) {
    let factors = [];
    let divisor = 2; // 가장 작은 소수부터 시작

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor; // 나누면서 계속 진행
        } else {
            divisor++; // 나누어 떨어지지 않으면 다음 숫자로
        }
    }

    return [...new Set(factors)]
}

console.log(primeFactorization(12)); // [2, 3]
console.log(primeFactorization(15)); // [3, 5]
console.log(primeFactorization(100)); // [2, 5]
console.log(primeFactorization(1024)); // [2]

