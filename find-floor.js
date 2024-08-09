function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            return arr[mid]; // x found in the array, so it is the floor
        } else if (arr[mid] < x) {
            floor = arr[mid]; // Update floor since arr[mid] is a candidate
            left = mid + 1;   // Move to the right to find a larger candidate
        } else {
            right = mid - 1;  // Move to the left to find a smaller candidate
        }
    }

    return floor;
}

module.exports = findFloor