function countSubstrings(t, p) {
    let count = 0;
    let pNum = Number(p);
    let pLen = p.length;

    for (let i = 0; i <= t.length - pLen; i++) {
        let subNum = Number(t.substring(i, i + pLen));
        if (subNum <= pNum) count++;
    }

    return count;
}

// ✅ 테스트 실행
console.log(countSubstrings("3141592", "271")); // 2
console.log(countSubstrings("500123", "600")); // 6 (모든 부분 문자열이 600 이하)
console.log(countSubstrings("123456", "200")); // 2 (123, 134)
console.log(countSubstrings("111111", "111")); // 4 (111, 111, 111, 111)
