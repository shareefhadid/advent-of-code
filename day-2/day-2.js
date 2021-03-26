const fs = require('fs')
const input = fs.readFileSync('./input.txt','utf-8')

let inputArray = input.split("\n").map((string) => Number(string))

console.log(inputArray)