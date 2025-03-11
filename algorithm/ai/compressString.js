/**
 * @param {string} s - 압축할 문자열
 * @return {string} 압축된 문자열
 *
 * @example
 * compressString("aaabbc");   // "a3b2c"
 * compressString("abcd");     // "abcd"
 * compressString("zzzzz");    // "z5"
 * compressString("aabcccc");  // "a2bc4"
 */
function compressString(s) {
    let result = '';
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) {
            count++;
        } else {
            result += s[i] + (count > 1 ? count : '');
            count = 1
        }
    }

    return result;
}


module.exports = compressString;
