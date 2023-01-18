function merge(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1){
        return arr;
    }

    // 1. 배열 분리
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // [10, 24, 76, 73]
    // [10, 24] [76, 73]
    // [10] [24]   [76, 73]
    // [10]        [76]

    // [10], [24]   // [76], [73]

    return merge(left, right);
    // [10, 24]    // [73, 76]
    // [10, 24, 73, 76]
}


console.log(merge([1, 10, 50], [2, 14, 99 ,100]))
console.log(mergeSort( [10, 24, 76, 73, 72, 1, 9]))
