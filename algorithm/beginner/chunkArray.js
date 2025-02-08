function chunkArray(num_list, n) {
    let result = [];

    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list.slice(i, i + n));
    }

    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3));
console.log(chunkArray([5, 10, 15, 20, 25, 30], 2));
