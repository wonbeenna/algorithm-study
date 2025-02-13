/**
 * @param {number[]} numbers
 * @return {number}
 */
function countValidTrios(numbers) {
    numbers.sort((a, b) => a - b); // 정렬
    let count = 0;

    for (let i = 0; i < numbers.length - 2; i++) { // 첫 번째 숫자 고정
        let left = i + 1;
        let right = numbers.length - 1;

        while (left < right) { // Two Pointers 사용
            let sum = numbers[i] + numbers[left] + numbers[right];

            if (sum === 0) {
                count++;
                left++;
                right--;
            } else if (sum < 0) {
                left++; // 합이 작으면 left 증가
            } else {
                right--; // 합이 크면 right 감소
            }
        }
    }

    return count;
}

// 테스트
console.log(countValidTrios([-2, 3, 0, 2, -5])); // 2
console.log(countValidTrios([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(countValidTrios([-1, 1, -1, 1])); // 0
