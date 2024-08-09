function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // If the array is already sorted, the smallest element is at the start
        if (arr[left] <= arr[right]) {
            return left;
        }

        let mid = Math.floor((left + right) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid - 1 + arr.length) % arr.length;

        // Check if the mid element is the smallest
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        // Decide whether to go left or right
        if (arr[mid] <= arr[right]) {
            right = mid - 1; // Go left
        } else if (arr[mid] >= arr[left]) {
            left = mid + 1; // Go right
        }
    }

    return -1; // This case should never be hit if the input is valid
}

module.exports = findRotationCount