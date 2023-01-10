function maxSubarraySum(arr, num){
    let max = 0;
    let current = 0;

    if(arr.length < num){
        return null;
    }

    for(let i = 0; i < num; i++){
        max += arr[i]
        current = max;
    }

    for(let i = num; i < arr.length; i++){
        current += arr[i] - arr[i - num]
        if(max < current){
            max = current
        }
    }

    return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))
