/**
 * @param {number[]} prices - 주식 가격이 담긴 배열
 * @return {number} 한 번의 거래로 얻을 수 있는 최대 이익
 *
 * @example
 * maxProfit([7, 1, 5, 3, 6, 4]); // 5 (1일에 사서 4일에 팔면 5 이익)
 * maxProfit([7, 6, 4, 3, 1]);    // 0 (이익을 얻을 수 없음)
 * maxProfit([2, 4, 1, 7, 5, 9]); // 8 (3일에 사서 6일에 팔면 8 이익)
 */
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
}

module.exports = maxProfit;
