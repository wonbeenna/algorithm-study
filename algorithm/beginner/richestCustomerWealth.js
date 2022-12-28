/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let total = 0;
    let result = 0

    for(let i = 0; i < accounts.length; i++){
        total = accounts[i].reduce((acc,cur) => acc + cur, 0)
        if(total > result){
            result = total
        }
    }
    return result
};
