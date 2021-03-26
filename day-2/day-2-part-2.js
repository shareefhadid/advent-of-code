const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

// Create an array of objects. Each object will store the password policy details and password
let inputArray = input.split("\n").map(function (string) {
  let substr = string.replace(/[-:\r]/ig, " ").split(" ")
  return {
    firstIndex: Number(substr[0])-1,
    secondIndex: Number(substr[1])-1,
    letter: substr[2],
    password: substr[4],
  }
})

// Accepts array of passwords, returns number of valid passwords.
function countValidPasswords(arrayOfPasswords) {
  let validCount = 0
  arrayOfPasswords.forEach(function ({ firstIndex, secondIndex, letter, password }) {
    let count = 0
    if (password[firstIndex]== letter) count ++
    if (password[secondIndex]== letter) count ++
    if (count == 1) validCount++
  })
  return validCount
}

console.log(countValidPasswords(inputArray))