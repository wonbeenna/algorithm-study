function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let noSwap = true;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }

        if (noSwap) {
            break;
        }
    }

    return arr;
}

console.log(bubbleSort([14, 22, 31, 61, 15])); // [14, 15, 22, 31, 61]
