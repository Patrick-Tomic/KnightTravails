/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Node } from './node'
export default class Game {
  node: Node
  ending: number[]
  moves: number
  positions: number[][]
  queue: number[][]
  found: boolean
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
    this.moves = 0
    this.queue = [start]
    this.found = false
  }

  nextarr (Position: number[]) {
    const newArr: number[][] = this.positions.map((position) => [position[0] + Position[0], position[1] + Position[1]])
    while (newArr.length) {
      if (newArr[0][0] === this.ending[0] && newArr[0][1] === this.ending[1]) {
        console.log('FOUND IT!!!')
        this.found = true
        this.queue.push(newArr[0])
        console.log(this.queue.length)
        return
      }
      if (newArr[0][0] >= 0 && newArr[0][0] <= 7 && newArr[0][1] >= 0 && newArr[0][1] <= 7) {
        this.queue.push(newArr[0])
        newArr.shift()
      } else {
        newArr.shift()
      }
    }
    this.moves++
    // eslint-disable-next-line array-callback-return
  }

  findEnd () {
    if (this.found) {
      return
    }
    console.log(this.queue[0] + '=' + this.ending)
    this.nextarr(this.queue[0])
    this.queue.shift()
    this.findEnd()
    console.log(this.queue)
  }
}
