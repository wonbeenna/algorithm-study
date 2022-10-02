/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
    matrix = matrix.flat()
    let left = 0;
    let right = matrix.length - 1

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let num = matrix[mid]

        if(num === target){
            return true
        }
        if(num > target){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return false
};