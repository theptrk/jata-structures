// new Array() or []

// given a sorted array, return the index of the target
const binarySearch = (arr, target) => {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while (leftPointer <= rightPointer) {
        let currentIndex = Math.floor((leftPointer + rightPointer)/2);
        let currentElement = arr[currentIndex];
        if (target === currentElement) {
            return currentIndex;
        } else if (target < currentElement) {
            rightPointer = currentIndex - 1;
        } else if (target > currentElement) {
            leftPointer = currentIndex + 1;
        }
    }
    // return a negative index of the targets insertion
    // (twos complement)
    return -leftPointer;
};
