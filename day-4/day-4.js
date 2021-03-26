const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

// Turn intput into one dimensional string. Get rid of new lines and returns from encoding.
let inputArray = input.replace(/\r/ig, "").split("\n\n").map(val => val.replace(/[\n\+]/ig, " "))
let required = ["byr","iyr","eyr","hgt","hcl","ecl","pid"]

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