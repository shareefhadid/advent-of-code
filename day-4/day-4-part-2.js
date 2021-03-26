const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

// Turn intput into array of passports stored as a single string
let inputArray = input.replace(/\r/ig, "").split("\n\n").map(val => val.replace(/[\n\+]/ig, " "))

// Passport Constructor
class Passport {
  constructor(passportString) {
    const splitArray = passportString.split(" ")
    splitArray.forEach((field) => {
      const fieldKey = field.split(":")[0]
      const fieldValue = field.split(":")[1]
      this[fieldKey] = fieldValue
    })
  }
}
// Turn array of strings into array of objects where the key is the field, and its value is the string value
passportArray = inputArray.map((string) => new Passport(string))

// Helper function that checks if a number falls in a range, since many validators require it
function inRange(val, min, max) {
  return val >= min && val <= max
}

// All validator functions below return an array. That way we don't recheck passports that are already invalid
function validateByr(passportArray) {
  return passportArray.filter(function({ byr }) {
    if (!byr) return
    return byr.length === 4 && inRange(Number(byr), 1920, 2002)
  })
}

console.log(passportArray.length)
passportArray = validateByr(passportArray)