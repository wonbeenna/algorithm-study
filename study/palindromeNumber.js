/* 문제 출처 : https://leetcode.com/problems/palindrome-number/ */

function isPalindrome(x) {
    let str = x.toString();

    // 재귀 탈출 조건
    if(str.length === 0){
        return true
    }

    if(str[0] === str[str.length - 1]){
        return isPalindrome(str.slice(1, str.length - 1))
    }

    return false
}


console.log(isPalindrome(232))
console.log(isPalindrome(-121))