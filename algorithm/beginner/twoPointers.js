// 두 수의 합 찾기 (정렬된 배열)
function twoSum(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return [arr[left], arr[right]]
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(twoSum([1, 2, 3, 4, 6], 6)); // [2, 4]

// 가장 긴 고유한 부분 문자열 찾기
function longestUniqueSubstring(s) {
    let left = 0, maxLen = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3 ("abc")

// 정렬된 두 배열 병합
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }

    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1,2,3,4,5,6]
