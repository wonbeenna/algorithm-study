const compressString = require('./compressString');

describe('compressString 함수 테스트', () => {
    test('일반적인 케이스', () => {
        expect(compressString("aaabbc")).toBe("a3b2c");
    });

    test('모든 문자가 1개씩 나오는 경우', () => {
        expect(compressString("abcd")).toBe("abcd");
    });

    test('같은 문자가 연속해서 등장하는 경우', () => {
        expect(compressString("zzzzz")).toBe("z5");
    });

    test('연속되지 않은 중복 문자 포함', () => {
        expect(compressString("aabcccc")).toBe("a2bc4");
    });

    test('한 글자로만 이루어진 문자열', () => {
        expect(compressString("aaaaa")).toBe("a5");
    });

    test('길이가 1인 문자열', () => {
        expect(compressString("a")).toBe("a");
    });

    test('가장 긴 입력 (경계값 테스트)', () => {
        const longString = "a".repeat(10000);
        expect(compressString(longString)).toBe("a10000");
    });
});
