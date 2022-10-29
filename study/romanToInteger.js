/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let array = [...s]
    let result = 0
    let symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for(let i = 0; i < array.length; i++){
        if(symbol[array[i]] > symbol[array[i + 1]]){
            result = result + symbol[array[i]]
            continue
        }
        if(symbol[array[i]] < symbol[array[i + 1]]){
            result = result + symbol[array[i + 1]] - symbol[array[i]]
            i++
            continue
        }
        result = result + symbol[array[i]]
    }
    return result
};

console.log(romanToInt("MCMXCIV"))