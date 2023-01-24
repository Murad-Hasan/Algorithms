/**
 * TODO: Two Number Sum
 */

const numbers = [6, 10, -8, 16, 22, 2, -2, 12];
const targetSum = 22;

/**
 * @param {Array<numbers>} array
 * @param {number} targetSum
 * @returns {Array<numbers>}
 */
// ! Solution 1 # O(n^2) time | O(1) space
// function twoNumSum(array, targetSum) {
//   for (let index = 0; index < array.length - 1; index++) {
//     const firstNum = array[index];
//     for (let j = index + 1; j < array.length; j++) {
//       const secondNum = array[j];
//       if (firstNum + secondNum === targetSum) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// }
// console.log(twoNumSum(numbers, targetSum));

/**
 *
 * @param {Array<numbers>} array
 * @param {number} targetSum
 * @returns {Array<numbers>}
 */
// ! Solution 2 # O(n) time | O(n) space
function twoNumSum(array, targetSum) {
  const nums = {}; // !Hash table
  for (const num of array) {
    let potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}
console.log(twoNumSum(numbers, targetSum));

// ! Solution 3 # O(nlog(n)) time | O(1) space
// const twoNumSum = (array, targetSum) => {
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     currentSum = array[left] + array[right];
//     if (currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if (currentSum > targetSum) {
//       right -= 1;
//     } else {
//       left += 1;
//     }
//   }
//   return [];
// };

// console.log(twoNumSum(numbers, targetSum));
