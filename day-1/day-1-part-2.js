const fs = require('fs')
const input = fs.readFileSync('./input.txt','utf-8')

// Turn input into an array of numbers
let inputArray = input.split("\n").map((string) => Number(string))

// Declare function to solve for entries that sum to target value and returns their product
function sumMultiplier(array, targetSum) {
  // initialize variable to avoid mutating original
  let arr = array
  // sort in ascending order
  arr.sort((a, b) => a - b)
  // Initialize start and end index
  // Loop through array until target sum is found or all values are evaluated
  for (const value of arr) {
    let startIndex = 0, endIndex = arr.length - 1
    while (startIndex < endIndex) {
      const sum = arr[startIndex] + arr[endIndex] + value
      if (sum === targetSum) {
        return (arr[startIndex] * arr[endIndex] * value)
      } else if (sum > targetSum) {
        endIndex--
      } else {
        startIndex++
      }
    }
  }
}

console.log(sumMultiplier(inputArray, 2020))