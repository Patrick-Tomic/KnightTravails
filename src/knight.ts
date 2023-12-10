/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Node } from './node'
export default class Game {
  node: Node
  ending: number[]
  moves: number
  positions: number[][]
  constructor (start: number[], end: number[]) {
    this.node = new Node(start)
    this.ending = end
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

  nextarr () {
    const newArr = this.positions.map((position) => [position[0] + this.node.position[0], position[1] + this.node.position[1]])
    console.log(newArr)
  }
}
