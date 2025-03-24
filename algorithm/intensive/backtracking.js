// dfs기반의 탐색
// 가능한 모든 경우의 수를 탐색하면서 조건에 맞지 않으면 가지치기
// function backtrack(path, options) {
//     if (정답을 만족하는 조건) {
//         정답 저장;
//         return;
//     }
//
//     for (let 선택 of options) {
//         if (선택이 유효한 경우) {
//             path.push(선택); // 선택 수행
//             backtrack(path, 새로운 options); // 재귀 호출
//             path.pop(); // 선택 되돌리기 (백트래킹)
//         }
//     }
// }

// N-Queens 문제 예제
function solveNQueens(n) {
    let result = [];
    let board = Array(n).fill().map(() => Array(n).fill('.'));

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return result;
}

console.log('solveNQueens', solveNQueens(4));

// 부분 집합 예제
function subsets(nums) {
    let result = [];

    function backtrack(start, path) {
        result.push([...path]); // 현재 부분집합을 추가

        for (let i = start; i < nums.length; i++) {
            // if (i > start && nums[i] === nums[i - 1]) continue; // 중복 방지 로직

            path.push(nums[i]); // 선택
            backtrack(i + 1, path); // 재귀 호출
            path.pop(); // 선택 해제 (백트래킹)
        }
    }

    backtrack(0, []);
    return result;
}

console.log('subsets', subsets([1, 2, 2]));

// 순열 예제
function permute(nums) {
    let result = [];

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // 중복 방지
            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return result;
}

console.log('permute', permute([1, 2, 3]));

// 조합 예제
function combine(n, k) {
    let result = [];

    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(1, []);
    return result;
}

console.log('combine', combine(4, 2));