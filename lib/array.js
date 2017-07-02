// new Array() or []

// dutch flag partitioning
// using three moving pointers (smaller, equal, larger) rearrange the array according
// to the three conditions using the pointers as the moving replacement indicies for
// numbers smaller than, equal to and larger than the pivot value
const dfpartition = (pivotIndex, arr) => {
    let smaller = 0;
    let equal = 0;
    let larger = arr.length;

    while (equal < larger) {
        let pivot = arr[pivotIndex];
        let compareValue = arr[equal];
        if (compareValue === pivot) {
            equal++;
        } else if (compareValue < pivot) {
            // note: the swap is only necessary once equal is larger than small
            if (smaller !== equal) {
                swap(arr[smaller], a[equal]);
            }
            smaller++;
            equal++;
        } else if (compareValue > pivot) {
            swap(arr[equal], arr[larger]);
            larger--;
        }
    }
};

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
