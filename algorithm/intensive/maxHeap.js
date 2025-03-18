class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // 부모 인덱스 찾기
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 왼쪽 자식 인덱스 찾기
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // 오른쪽 자식 인덱스 찾기
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // 루트(최대값) 반환
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // 요소 삽입 (Heapify Up)
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // 요소 삭제 (Heapify Down)
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    // 삽입 후 정렬 (상향 이동)
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // 삭제 후 정렬 (하향 이동)
    heapifyDown() {
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let leftIndex = this.getLeftChildIndex(index);
            let rightIndex = this.getRightChildIndex(index);
            let largest = index;

            if (leftIndex < length && this.heap[leftIndex] > this.heap[largest]) {
                largest = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex] > this.heap[largest]) {
                largest = rightIndex;
            }
            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

// 사용 예시
const maxHeap = new MaxHeap();
maxHeap.push(10);
maxHeap.push(20);
maxHeap.push(15);
maxHeap.push(30);
maxHeap.push(40);

console.log(maxHeap.pop()); // 40
console.log(maxHeap.pop()); // 30
console.log(maxHeap.pop()); // 20
console.log(maxHeap.pop()); // 15
console.log(maxHeap.pop()); // 10
