/**
 * @param {Array} arr source array
 * @param {number} item search item
 * @returns {(number|null)} if value find then return a number otherwise Null
 */

const recursive_Binary_Search = (arr, item, low = 0, high = arr.length - 1) => {
  if (low > high) return null;
  const mid = Math.floor(low + high) / 2;
  const guess = arr[mid];

  if (guess === item) {
    return mid;
  } else if (guess > item) {
    return recursive_Binary_Search(arr, item, low, mid - 1);
  } else {
    return recursive_Binary_Search(arr, item, mid + 1, high);
  }
};

console.log(recursive_Binary_Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
