function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];

        for(let j = i - 1; j >= 0 && arr[j] > val; j--) {
            arr[j + 1] = arr[j];
            arr[j] = val;
        }
    }

    return arr;
}

console.log(insertionSort([10, 30, 40, 20, 50, 70, 60])); // [10, 20, 30, 40, 50, 60, 70]
