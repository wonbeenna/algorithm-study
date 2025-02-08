// 최대 공약수
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(10, 15));
console.log(gcd(35, 49));
console.log(gcd(2, 0));
console.log(gcd(0, 2));
