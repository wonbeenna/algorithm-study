function longestCommonSubsequence(X, Y) {
  const m = X.length;
  const n = Y.length;

  // DP 테이블 초기화
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // DP 테이블 채우기
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X[i - 1] === Y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // LCS 추적
  let lcs = "";
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (X[i - 1] === Y[j - 1]) {
      lcs = X[i - 1] + lcs;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return { length: dp[m][n], sequence: lcs };
}

// 예제
const X = "ABCBDAB";
const Y = "BDCAB";
const result = longestCommonSubsequence(X, Y);

console.log(`LCS 길이: ${result.length}`); // 출력: 4
console.log(`LCS: ${result.sequence}`);   // 출력: BCAB
