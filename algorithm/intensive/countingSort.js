function countingSort(array) {
  // 배열에서 최대값과 최소값을 찾음
  const max = Math.max(...array);
  const min = Math.min(...array);
  const range = max - min + 1;

  // 카운트 배열 생성 및 초기화
  const count = Array(range).fill(0);

  // 결과를 저장할 배열
  const output = Array(array.length);

  // 각 숫자의 개수 카운트
  for (let i = 0; i < array.length; i++) {
    count[array[i] - min]++;
  }

  // 카운트 배열을 누적합으로 변경
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // 입력 배열을 순회하며 정렬된 위치에 배치
  for (let i = array.length - 1; i >= 0; i--) {
    output[count[array[i] - min] - 1] = array[i];
    count[array[i] - min]--;
  }

  // 정렬된 결과를 원본 배열에 복사
  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }

  return array;
}

console.log(countingSort([4, 12, 2, 28, 13, 36, 1]));
