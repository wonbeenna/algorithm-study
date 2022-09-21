function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        // 가장 작은 값
        let lowest = i
        // 비교 0 1, 0 2, 0 3, 0 4 ....
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if(i !== lowest){
            // SWAP
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

function optimizeSelectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            swap(arr, i, lowest)
        }
    }

    return arr
}

console.log(optimizeSelectionSort([0,2,34,22,10,19,17]))
