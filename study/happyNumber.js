/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n > 0){
        let calcur = calculate(n)
        if(calcur === 1){
            return true
        }else if(calcur > 1 && calcur <= 4){
            return false;
        }
        return isHappy(calcur)
    }
};

function calculate(n){
    n = String(n).split('')

    let result = n.reduce((prev, cur) => {
        return prev += Math.pow(cur, 2)
    }, 0)

    return result;
}
