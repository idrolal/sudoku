const fs = require("fs");


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!


// const fs = require('fs')
// const read = fs.readFileSync('/sudoku-puzzles.txt', 'utf-8').split('\n');

let str = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'
const table = prettyBoard(str)
console.log(a(table))

function a (arr) {
	for (let j = 0; j < arr.length; j++){
	for(let i = 0; i < arr.length; i++){
		
	return arr[i].map(el => el.replace('-', Math.floor(Math.random(1)*9)))
	} 
}
}

function solved(table) {


	for(let i = 0; i < table.length; i++){
		for(let j = 0; j < 9; j++){
			if(table[i][j] === '-'){
				return  table[i][j] = Math.floor(Math.random(1)*9)
				} else {
				return table[i][j] = table[i][j]
			}
		}
	}
}

function prettyBoard (board) {
	let res = []


  for (let i = 0; i < board.length; i += 9) {
    res.push(board.slice(i, [i + 9]))
  }

  return res.map(a => a.split(''))


}

function isSolved(board) {

}




// Exports all the functions to use them in another file.
module.exports = {
	solved: solved,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

