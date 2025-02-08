function closestNum(array, n) {
    return array.reduce((closest, num) => {
        const diffClosest = Math.abs(closest - n);
        const diffNum = Math.abs(num - n);

        // 더 가까운 숫자로 업데이트 (거리가 같으면 더 작은 숫자 선택)
        return (diffNum < diffClosest || (diffNum === diffClosest && num < closest)) ? num : closest;
    });
}

module.exports = closestNum;
