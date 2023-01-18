/**
 * @param {string} s
 * @return {boolean}
 */
const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}"
}

var isValid = function(s) {
    let stack = []

    for(let i = 0; i < s.length; i++) {
        if(parentheses[s[i]]) {
            stack.push(s[i])
        } else if (parentheses[stack.pop()] !== s[i]) {
            return false
        }

    }
    return stack.length === 0
};

console.log(isValid('{}'))
console.log(isValid('{}(()]'))
console.log(isValid('{}()[]'))
