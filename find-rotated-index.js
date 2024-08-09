function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If the mid element is the target, return its index
        if (arr[mid] === num) {
            return mid;
        }

        // Determine which part is sorted
        if (arr[left] <= arr[mid]) {
            // Left part is sorted
            if (num >= arr[left] && num < arr[mid]) {
                right = mid - 1; // Search in the left sorted part
            } else {
                left = mid + 1; // Search in the right part
            }
        } else {
            // Right part is sorted
            if (num > arr[mid] && num <= arr[right]) {
                left = mid + 1; // Search in the right sorted part
            } else {
                right = mid - 1; // Search in the left part
            }
        }
    }

    return -1; // If the number is not found
}


module.exports = findRotatedIndex