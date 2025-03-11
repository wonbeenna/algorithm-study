function solution(A) {
    let x = 2, y = 2; // 현재 위치

    let dx = [0, 0, 1, -1]; // 행 이동값 (X축)
    let dy = [1, -1, 0, 0]; // 열 이동값 (Y축)

    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i]; // 새로운 X 좌표
        let ny = y + dy[i]; // 새로운 Y 좌표
        console.log(`이동 방향: (${dx[i]}, ${dy[i]}) → 새로운 위치: (${nx}, ${ny})`);
    }

}

solution(); // 이동 방향: (0, 1) → 새로운 위치: (2, 3)
            // 이동 방향: (0, -1) → 새로운 위치: (2, 1)
            // 이동 방향: (1, 0) → 새로운 위치: (3, 2)
            // 이동 방향: (-1, 0) → 새로운 위치: (1, 2)

function solution2(n, arr1, arr2) {
    return arr1.map((val, i) => {
        let binaryStr = (val | arr2[i]) // 비트 OR 연산으로 두 배열 결합
            .toString(2) // 이진수 변환
            .padStart(n, '0'); // n길이 맞추기
        console.log(binaryStr)
        let result = '';
        for (let char of binaryStr) {
            result += char === '1' ? '#' : ' ';
        }
        return result;
    });
}


function solution3(land) {
    // land[i][j] += max(land[i-1][0], land[i-1][1], land[i-1][2], land[i-1][3])  (단, j열 제외)
// [
//     [1, 2, 3, 5],
//     [5, 6, 7, 8],
//     [4, 3, 2, 1]
// ]
    for(let i = 1; i < land.length; i++) {
        for(let j = 0; j < 4; j++) {
            let count = 0;

            for(let k = 0; k < 4; k++) {
                if(k !== j) {
                    count = Math.max(count, land[i - 1]?.[k])
                }
            }
            land[i][j] += count;
        }
    }

     return Math.max(...land[land.length - 1]); // 마지막 행에서 최대값 반환
}

// 테스트 코드
console.log(solution2(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####", "# # #", "### #", "#  ##", "#####"]

console.log(solution2(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));
// ["######", "###  #", "##  ##", " #### ", " #####", "### # "]

console.log(solution3([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1]
])); // 16

console.log(solution3([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
    [1, 2, 3, 4]
])); // 20
