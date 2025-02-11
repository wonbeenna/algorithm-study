/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function romanToInt(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let currentVal = romanMap[s[i]];
        let nextVal = romanMap[s[i + 1]];

        if (nextVal > currentVal) {
            total -= currentVal; // 작은 숫자가 큰 숫자 앞에 있으면 빼기
        } else {
            total += currentVal; // 그렇지 않으면 더하기
        }
    }

    return total;
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
