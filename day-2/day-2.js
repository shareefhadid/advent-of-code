const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

// Create an array of objects. Each object will store the password policy details and password
let inputArray = input.split("\n").map(function (string) {
  let substr = string.replace(/[-:\r]/ig, " ").split(" ")
  return {
    min: substr[0],
    max: substr[1],
    letter: substr[2],
    password: substr[4],
  }
})

// Accepts array of passwords, returns number of valid passwords.
function countValidPasswords(arrayOfPasswords) {
  let validCount = 0
  arrayOfPasswords.forEach(function ({ min, max, letter, password }) {
    // create regexp to match password with
    const re = new RegExp(letter, 'g')
    // count number of occurences in password
    const count = (password.match(re) || []).length
    // Check that password is valid
    if (count >= min && count <= max) validCount++
  })
  return validCount
}

console.log(countValidPasswords(inputArray))