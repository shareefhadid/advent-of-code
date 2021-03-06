const fs = require('fs')
const input = fs.readFileSync('./input.txt','utf-8')

// Turn input into an array of numbers
let inputArray = input.split("\n").map((string) => Number(string))

// Accepts Array of numbers and targetSum of any two values in the array. Returns the multiple of the two values.
function sumMultiplier(array, targetSum) {
  // initialize variable to avoid mutating original
  let arr = array
  // sort in ascending order
  arr.sort((a, b) => a - b)
  // Initialize start and end index
  let startIndex = 0, endIndex = arr.length - 1
  // Loop through array until target sum is found or all values are evaluated
  while (startIndex < endIndex) {
    const sum = arr[startIndex] + arr[endIndex]
    if (sum === targetSum) {
      return (arr[startIndex] * arr[endIndex])
    } else if (sum > targetSum) {
      endIndex--
    } else {
      startIndex++
    }
  }
}

console.log(sumMultiplier(inputArray, 2020))