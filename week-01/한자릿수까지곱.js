// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  let count = 0;

  if (num.length === 1) {
    count = 0;
  }

  // 한자릿수가 될때까지 곱셈해주고 카운트 ++
  while (num >= 10) {
    num = String(num) // 넘버로 주어지기 때문에 문자열 -> 배열로
      .split("")
      .reduce((a, b) => Number(a) * Number(b), 1);
    count++;
  }
  return count;
}
