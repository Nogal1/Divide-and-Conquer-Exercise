function countZeroes(arr) {
    let firstZeroIndex = findFirstZero(arr);
    if (firstZeroIndex === -1) return 0; // No zeros in the array

    return arr.length - firstZeroIndex;
}

function findFirstZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0) {
            if (mid === 0 || arr[mid - 1] === 1) {
                return mid; // Found the first zero
            }
            right = mid - 1; // Look in the left half
        } else {
            left = mid + 1; // Look in the right half
        }
    }

    return -1; // No zeros found
}

module.exports = countZeroes