const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

// Turn intput into array of passports
let inputArray = input.replace(/\r/ig, "").split("\n\n").map(val => val.replace(/[\n\+]/ig, " "))

// initialize required fields
let required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

// Validates if array of passport contains all of the require fields
function passportValidator(arrayOfPassports, arrayRequired) {
  let counter = 0
  arrayOfPassports.forEach(passport => {
    let valid = true
    for (const requirement of arrayRequired) {
      if (!passport.includes(requirement)) valid = false
    }
    if (valid) counter++
  })
  return counter
}
console.log(passportValidator(inputArray, required))