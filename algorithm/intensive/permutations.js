// 순열
function permutations(arr, selected, length = 0) {
    if (arr.length === length) {
        return [selected];
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const nextArr = arr.slice(0, i).concat(arr.slice(i + 1));
        result.push(...permutations(nextArr, selected.concat(current), length));
    }

    return result;
}

const arr = [1, 2, 3, 4];
const selected = [];
console.log(permutations(arr, selected, 2));

// 중복 순열
function repeatedPermutations(arr, selected, length = 0) {
    if (selected.length === length) {
        return [selected];
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        result.push(...repeatedPermutations(arr, selected.concat(current), length));
    }

    return result;
}

const arr2 = [1, 2, 3, 4];
const selected2 = [];
console.log(repeatedPermutations(arr2, selected2, 2)); // 길이 2의 중복 순열
