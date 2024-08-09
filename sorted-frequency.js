function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx === -1) return -1; // Number not found

    let lastIdx = findLast(arr, num);

    return lastIdx - firstIdx + 1;
}

function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            result = mid;
            right = mid - 1; // Look in the left half
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            result = mid;
            left = mid + 1; // Look in the right half
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}


module.exports = sortedFrequency