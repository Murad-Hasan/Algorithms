const arr = [2, 1, 16, 9, 18, 9, 7, 11, 5, 3, 17];
const subsequence = [1, 9, 11, 3];
/**
 * validate subsequence
 * @param {Array} array array
 * @param {Array} subsequence array
 * @returns {boolean} boolean
 */
// function validateSubsequence(array, subsequence) {
//   arrIdx = 0;
//   subIdx = 0;
//   while (arrIdx < array.length && subIdx < subsequence.length) {
//     if (array[arrIdx] === subsequence[subIdx]) {
//       subIdx += 1;
//     }
//     arrIdx += 1;
//   }
//   return subIdx == subsequence.length;
// }

function validateSubsequence(array, subsequence) {
  let subIdx = 0;
  for (const value of array) {
    if (subIdx === subsequence.length) break;
    if (subsequence[subIdx] === value) subIdx += 1;
  }
  return subIdx === subsequence.length;
}

console.log(validateSubsequence(arr, subsequence));
