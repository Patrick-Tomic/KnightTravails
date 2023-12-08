/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Game {
  starting: number[]
  ending: number[]
  board: number[][]
  positions: number[][]
  moves: number
  constructor (start: number[], end: number[]) {
    this.starting = start
    this.ending = end
    this.board = []
    this.positions = [
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
      [-1, 2]
    ]
    this.moves = 1
  }

  findHome (numberMoves: number = 1): void {
    this.board.push(this.starting)
    const next = this.findPossiblePositions(this.board[this.board.length - 1])
    let count = 0
    while (count < next.length) {
      if (next[count][0] === this.ending[0] && next[count][1] === this.ending[1]) {
        console.log('Made it to end in ' + numberMoves + ' moves')
        return
      } else {
        this.findHome(numberMoves++)
        console.log(next[count])
      }
      count++
    }
  }

  findPossiblePositions (position: number[]) {
    const nextSteps: number[][] = []
    for (let i = 0; i < 8; i++) {
      const x = position[0] + this.positions[i][0]
      for (let y = 1; y < 2; y++) {
        const z = position[1] + this.positions[i][y]
        nextSteps.push([x, z])
      }
    }
    return nextSteps
  }
}
