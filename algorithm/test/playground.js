function solution(A) {
    let currentLength = A.length;
    let num = (currentLength + 1) * (currentLength + 2) / 2;
    let sum = A.reduce((acc, cur) => acc + cur, 0);

    console.log(num)
    return num - sum;
}

console.log(solution([1, 5, 3, 2, 4])) // 6
