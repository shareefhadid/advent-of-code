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
  return passportArray.filter(function ({ byr }) {
    if (!byr) return
    return byr.length === 4 && inRange(Number(byr), 1920, 2002)
  })
}

function validateIyr(passportArray) {
  return passportArray.filter(function ({ iyr }) {
    if (!iyr) return
    return iyr.length === 4 && inRange(Number(iyr), 2010, 2020)
  })
}

function validateEyr(passportArray) {
  return passportArray.filter(function ({ eyr }) {
    if (!eyr) return
    return eyr.length === 4 && inRange(Number(eyr), 2020, 2030)
  })
}

function validateHgt(passportArray) {
  return passportArray.filter(function ({ hgt }) {
    if (!hgt) return
    const num = hgt.slice(0, -2)
    const unit = hgt.substr(hgt.length - 2, 2)
    if (unit === "in") {
      return inRange(num, 59, 76)
    } else if (unit === "cm") {
      return inRange(num, 150, 193)
    } else return
  })
}

function validateHcl(passportArray) {
  return passportArray.filter(function ({ hcl }) {
    if (!hcl || hcl[0] !== "#" || hcl.length !== 7) return
    return /^[a-z0-9]+$/.test(hcl.slice(1))
  })
}

function validateHcl(passportArray) {
  return passportArray.filter(function ({ hcl }) {
    if (!hcl || hcl[0] !== "#" || hcl.length !== 7) return
    return /^[a-z0-9]+$/.test(hcl.slice(1))
  })
}

passportArray = validateByr(passportArray)
console.log(`validated byr, number of passports remaining: ${passportArray.length}`)
passportArray = validateIyr(passportArray)
console.log(`validated iyr, number of passports remaining: ${passportArray.length}`)
passportArray = validateEyr(passportArray)
console.log(`validated eyr, number of passports remaining: ${passportArray.length}`)
passportArray = validateHgt(passportArray)
console.log(`validated hgt, number of passports remaining: ${passportArray.length}`)
passportArray = validateHcl(passportArray)
console.log(`validated hcl, number of passports remaining: ${passportArray.length}`)