function heapSort(array) {
  const n = array.length;

  // 힙을 생성하는 함수
  function heapify(arr, size, rootIndex) {
    let largest = rootIndex; // 루트 노드
    const leftChild = 2 * rootIndex + 1; // 왼쪽 자식
    const rightChild = 2 * rootIndex + 2; // 오른쪽 자식

    // 왼쪽 자식이 루트보다 크다면
    if (leftChild < size && arr[leftChild] > arr[largest]) {
      largest = leftChild;
    }

    // 오른쪽 자식이 현재 largest보다 크다면
    if (rightChild < size && arr[rightChild] > arr[largest]) {
      largest = rightChild;
    }

    // largest가 루트가 아니라면 교환
    if (largest !== rootIndex) {
      [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];

      // 재귀적으로 힙 속성을 유지
      heapify(arr, size, largest);
    }
  }

  // 1. 최대 힙 생성
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // 2. 하나씩 요소를 힙에서 제거하여 정렬
  for (let i = n - 1; i > 0; i--) {
    // 루트(가장 큰 값)를 끝으로 보냄
    [array[0], array[i]] = [array[i], array[0]];

    // 남은 힙에 대해 heapify 호출
    heapify(array, i, 0);
  }

  return array;
}

console.log(heapSort([4, 10, 3, 5, 1]));
