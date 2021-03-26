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
