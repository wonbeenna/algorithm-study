function sumNumbersInString(my_string) {
    let sum = 0;
    let num = ""; // 현재 숫자를 저장할 변수

    for (let char of my_string) {
        if (!isNaN(char)) { // 숫자인 경우
            num += char; // 숫자 이어 붙이기
        } else if (num.length > 0) { // 문자를 만나면 숫자 합산
            sum += Number(num);
            num = ""; // 숫자 초기화
        }
    }

    // 마지막 숫자가 있을 경우 더하기
    if (num.length > 0) {
        sum += Number(num);
    }

    return sum;
}

console.log(sumNumbersInString("abc123def")); // 123
console.log(sumNumbersInString("abc123def456")); // 579
console.log(sumNumbersInString("abc")); // 0
