function bucketSort(array, bucketSize = 5) {
  if (array.length <= 1) return array;

  // 1. 배열에서 최대값과 최소값을 찾음
  const min = Math.min(...array);
  const max = Math.max(...array);

  // 2. 버킷의 개수 계산
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = Array.from({ length: bucketCount }, () => []);

  // 3. 각 요소를 적절한 버킷에 추가
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - min) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }

  // 4. 각 버킷을 정렬하고 결과를 합침
  return buckets.reduce((sortedArray, bucket) => {
    if (bucket.length > 0) {
      bucket.sort((a, b) => a - b); // 버킷 내부 정렬
      sortedArray.push(...bucket);
    }
    return sortedArray;
  }, []);
}

console.log(bucketSort([42, 32, 33, 52, 37, 47, 51]));
