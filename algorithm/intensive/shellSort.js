function shellSort(array) {
  const n = array.length;

  // 초기 간격 설정 (일반적으로 n/2부터 시작)
  let gap = Math.floor(n / 2);

  // 간격이 0이 될 때까지 반복
  while (gap > 0) {
    // gap 크기만큼 떨어진 요소들을 삽입 정렬
    for (let i = gap; i < n; i++) {
      const temp = array[i];
      let j = i;

      // gap 크기만큼 떨어진 이전 요소들과 비교하며 이동
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }

      // 올바른 위치에 삽입
      array[j] = temp;
    }

    // 간격을 줄임
    gap = Math.floor(gap / 2);
  }

  return array;
}

console.log(shellSort([12, 34, 54, 2, 3]));
