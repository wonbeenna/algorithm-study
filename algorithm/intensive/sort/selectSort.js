function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

    }
    return arr;
}

console.log(selectSort([14, 22, 31, 61, 15])); // [14, 15, 22, 31, 61]
