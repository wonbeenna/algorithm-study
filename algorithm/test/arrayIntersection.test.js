const arrayIntersection = require('../beginner/arrayIntersection');

test('arrayIntersection', () => {
    expect(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual(3);
    expect(arrayIntersection([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual(0);
    expect(arrayIntersection([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual(5);
});
