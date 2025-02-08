const closestNum = require('../beginner/closestNum');

test('closestNum', () => {
    expect(closestNum([10, 20, 30], 25)).toEqual(20);
    expect(closestNum([1, 5, 10], 6)).toEqual(5);
    expect(closestNum([4, 7, 9, 12], 8)).toEqual(7);
    expect(closestNum([1, 2, 3], 2)).toEqual(2);
    expect(closestNum([2, 4, 8], 5)).toEqual(4);
})
