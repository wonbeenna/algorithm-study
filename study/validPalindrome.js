/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphabet = s.toLowerCase().replace(/[^A-Za-z0-9]/gi, "")

    if(s === ' '){
        return true
    }

    return palindrome(alphabet)
};

function palindrome(str) {
    if(str.length === 0){
        return true
    }

    if(str[0] === str[str.length - 1]){
        return palindrome(str.slice(1, str.length - 1))
    }

    return false
}
