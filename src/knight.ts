/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Game {
  starting: number[]
  ending: number[]
  board: number[][]
  positions: number[][]
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
  }

  findHome () {
    this.board.push(this.starting)
    const next = this.findPossiblePositions(this.board[this.board.length - 1])
    console.log(next)
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
