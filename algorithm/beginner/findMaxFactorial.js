function findMaxFactorial(n) {
  let i = 1;
  let fact = 1;

  while (fact * (i + 1) <= n) {
    i++;
    fact *= i;
  }

  return i;
}

console.log(findMaxFactorial(3)); // 2
console.log(findMaxFactorial(3628800)); // 10
console.log(findMaxFactorial(7)); // 3
