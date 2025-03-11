const maxProfit = require('./maxProfit');

describe('maxProfit 함수 테스트', () => {
    test('기본 테스트 케이스', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    test('이익을 얻을 수 없는 케이스', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    test('최저점이 배열의 중간에 위치한 케이스', () => {
        expect(maxProfit([2, 4, 1, 7, 5, 9])).toBe(8);
    });

    test('가격이 하나뿐인 케이스', () => {
        expect(maxProfit([5])).toBe(0);
    });

    test('가격 변동이 없는 케이스', () => {
        expect(maxProfit([3, 3, 3, 3])).toBe(0);
    });
});
