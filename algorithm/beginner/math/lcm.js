// 최소 공배수
const gcd = require('./gcd');

function lcm(a, b) {
    return (a * b) / gcd(a, b); // 최소공배수(LCM) 계산
}

console.log(lcm(10, 15));
console.log(lcm(35, 49));
console.log(lcm(2, 0));
