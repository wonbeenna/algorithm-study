function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {  // 초기 윈도우 설정
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) { // 슬라이딩 윈도우 이동
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // ➝ 9 (5+1+3)
