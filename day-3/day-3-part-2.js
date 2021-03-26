const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

// Turn intput into one dimensional string. Get rid of new lines and returns from encoding.
let inputOneD = input.replace(/[\n\r]/ig, "")

// Store length of row
let rowLength = input.replace(/\r/ig, "").split("\n")[0].length

// moveRight helper. Moving right can increase or decrease your position, depending on where you end up.
function moveRight(rowPosition, moves) {
  const sum = rowPosition + moves
  if (sum > rowLength) {
    // not really necessary to floor for this problem, only relevant if sum can be much greater than row length
    const newRowPosition = (sum - (Math.floor(sum / rowLength) * rowLength))
    return (newRowPosition - rowPosition)
  } else return moves
}

// moveDown helper. Moving down in 1-D just means increasing position by rowLength * number of moves
function moveDown(moves) {
  return (rowLength * moves)
}

// Primary function that returns how many trees you encountered while traversing
function treeCounter(string, right, down) {
  let rowPosition = 1;
  let position = 1;
  let treeCounter = 0;
  while (position < inputOneD.length+1) {
    position += moveRight(rowPosition, right)
    rowPosition += moveRight(rowPosition, right)
    position += moveDown(down)
    if (string[position-1] === "#") treeCounter++
  }
  return treeCounter
}

const slope1 = treeCounter(inputOneD,1,1)
const slope2 = treeCounter(inputOneD,3,1)
const slope3 = treeCounter(inputOneD,5,1)
const slope4 = treeCounter(inputOneD,7,1)
const slope5 = treeCounter(inputOneD,1,2)

console.log(slope1*slope2*slope3*slope4*slope5)