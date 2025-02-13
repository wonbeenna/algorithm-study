function minHeapInsert(heap, value) {
    heap.push(value);
    let index = heap.length - 1;

    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (heap[parentIndex] <= heap[index]) {
            break;
        }
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
    }
}

function minHeapRemove(heap) {
    if (heap.length === 1) {
        return heap.pop();
    }

    const min = heap[0];
    heap[0] = heap.pop();

    let index = 0;

    while (true) {
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let smallest = index;
        if (leftChildIdx < heap.length && heap[leftChildIdx] < heap[smallest]) {
            smallest = leftChildIdx;
        }

        if (rightChildIdx < heap.length && heap[rightChildIdx] < heap[smallest]) {
            smallest = rightChildIdx;
        }

        if (smallest === index) {
            break;
        }

        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }

    return min;
}

// 테스트
const heap = [];
minHeapInsert(heap, 3);
minHeapInsert(heap, 2);
minHeapInsert(heap, 1);
minHeapInsert(heap, 5);
minHeapInsert(heap, 6);
minHeapInsert(heap, 4);
console.log(heap); // [1, 2, 3, 5, 6, 4]
console.log(minHeapRemove(heap)); // 1
console.log(minHeapRemove(heap)); // 2
console.log(minHeapRemove(heap)); // 3
console.log(minHeapRemove(heap)); // 4
console.log(minHeapRemove(heap)); // 5
console.log(minHeapRemove(heap)); // 6
