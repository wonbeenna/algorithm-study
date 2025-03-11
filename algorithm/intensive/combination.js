function combinations(arr, r, selected = [], index = 0) {
    if (selected.length === r) {
        return [selected];
    }

    if (index >= arr.length) {
        return [];
    }

    const result = [];

    // 현재 요소 선택
    result.push(...combinations(arr, r, selected.concat(arr[index]), index + 1));

    // 현재 요소 선택하지 않음
    result.push(...combinations(arr, r, selected, index + 1));

    return result;
}

console.log(combinations([1, 2, 3, 4], 3));

function repeatedCombinations(arr, r, selected = [], index = 0) {
    if (selected.length === r) {
        return [selected];
    }

    if (index >= arr.length) {
        return [];
    }

    const result = [];

    // 현재 요소 선택 (중복 가능하므로 `index` 유지)
    result.push(...repeatedCombinations(arr, r, selected.concat(arr[index]), index));

    // 현재 요소 선택하지 않음 (다음 요소로 이동)
    result.push(...repeatedCombinations(arr, r, selected, index + 1));

    return result;
}

console.log(repeatedCombinations([1, 2, 3, 4], 2));
