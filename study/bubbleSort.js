function bubbleSort(arr){
    // undefined 를 비교하지 않도록
    for(let i = arr.length; i > 0; i--){
      for(let j = 0; j < i - 1; j++){
          if(arr[j] > arr[j + 1]){
              // swap
              let temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
          }
      }
    }
    return arr;
}

function optimizeBubbleSort(arr){
    let noSwaps
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if(noSwaps){
            break
        }
    }
    return arr;
}

//     [37, 45, 29, 8]
//     [37, 29, 8, 45]
//     [29, 8, 37, 45]
//     {...}


console.log(bubbleSort([37, 45, 29, 8]))
console.log(optimizeBubbleSort([37, 45, 29, 8]))