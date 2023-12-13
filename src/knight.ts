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
    let newArr: number[][] = this.positions.map((position) => [position[0] + Position[0], position[1] + Position[1]])
    while (newArr.length) {
      if (newArr[0][0] === this.ending[0] && newArr[0][1] === this.ending[1]) {
        this.moves++
        this.queue = this.queue.slice(0, this.moves)
        this.found = true
        return
      }
      newArr.shift()
    }
    newArr = this.positions.map((position) => [position[0] + Position[0], position[1] + Position[1]])
    while (newArr.length) {
      if (newArr[0][0] >= 0 && newArr[0][0] <= 7 && newArr[0][1] >= 0 && newArr[0][1] <= 7) {
        this.queue.push(newArr[0])
        newArr.shift()
      } else {
        newArr.shift()
      }
    }
    this.moves++
  }

  findEnd () {
    this.nextarr(this.queue[this.moves])
    if (this.found) {
      return
    }
    this.findEnd()
  }

  organize (root = this.node, arr: number[][] = [], temp: number[][] = []) {
    const node = root
    if (arr.length) {
      if (temp.length === 0) {
        temp.push(arr[0])
      }
      if (this.queue[0][0] === arr[0][0] + 2 || this.queue[0][0] === arr[0][0] - 2 || this.queue[0][0] === arr[0][0] - 1 || this.queue[0][0] === arr[0][0] + 1) {
        if (this.queue[0][1] === arr[0][1] + 2 || this.queue[0][1] === arr[0][1] - 2 || this.queue[0][1] === arr[0][1] - 1 || this.queue[0][1] === arr[0][1] + 1) {
          temp.push(this.queue[0])
          this.queue.shift()
          this.organize(node, arr, temp)
        }
      } else {
        arr.shift()
        console.log(temp)
        console.log(this.queue)
        temp = []
      }
    }
    if (node.nextNode == null) {
      while (this.queue.length) {
        if (node.position === this.queue[0]) {
          this.queue.shift()
        } else if (this.queue[0][0] === node.position[0] + 2 || this.queue[0][0] === node.position[0] - 2 || this.queue[0][0] === node.position[0] + 1 || this.queue[0][0] === node.position[0] - 1) {
          if (this.queue[0][1] === node.position[1] + 2 || this.queue[0][1] === node.position[1] - 2 || this.queue[0][1] === node.position[1] + 1 || this.queue[0][1] === node.position[1] - 1) {
            arr.push(this.queue[0])
            this.queue.shift()
          }
        } else {
          this.organize(node, arr)
        }
      }
    }
  }
}
