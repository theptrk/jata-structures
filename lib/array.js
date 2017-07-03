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

// advancing through an array
// at each index, we are given information about how many steps you can take from that
// index; figure out if you can advance from index 0 to the end based on these options;
// use progressively updated information (the furthest space reachable)
// hint: keep a running best answer
// [2,4,1,1,0,2,3]
//  ^ we can go to index 1 or 2 from here (index 0 + (range(0, 2)))
//      ^ we can only go to index 3 from here (index 2 + (range(0,1)))
const advancingByStepOptions = (arr) => {
    let i = 0;
    let furthestReachableStep = 0;
    while (i < arr.length && i <= furthestReachableStep) {
        let reachableFromHere = i + arr[i];
        furthestReachableStep = Math.max(furthestReachableStep, reachableFromHere);
        i++;
    }
    return furthestReachableStep >= (arr.length - 1);
};

// find the maximum stock return with one purchase and one sale
// hint: keep a running best answer
const maxStockReturn = (arr) => {
    let runningBestProfit = 0;
    let minimumPriceSeen = arr[0];
    let i = 1;
    while (i < arr.length) {
        let currentPrice = arr[i];
        let currentProfit = currentPrice - minimumPriceSeen;
        runningBestProfit = Math.max(currentProfit, runningBestProfit);
        minimumPriceSeen = Math.min(currentPrice, minimumPriceSeen);
        i++;
    };
    return runningBestProfit;
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
