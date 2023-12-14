/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Game {
  finalRoute: number[][]
  starting: number[]
  ending: number[]
  moves: number
  positions: number[][]
  queue: number[][]
  visited: number[][]
  found: boolean
  constructor (start: number[], end: number[]) {
    this.finalRoute = [start]
    this.visited = []
    this.ending = end
    this.starting = start
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
        this.finalRoute.push(Position)
        return
      }
      newArr.shift()
    }
    if (this.found) return
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
    if (this.found) {
      return
    }
    this.nextarr(this.queue[0])
    let count = 0
    while (count < this.visited.length) {
      if (this.queue[0][0] === this.visited[count][0] && this.queue[0][1] === this.visited[count][1]) {
        this.queue.shift()
        this.findEnd()
      }
      count++
    }
    this.visited.push(this.queue[0])
    this.queue.shift()
    this.findEnd()
  }

  findRoute () {
    const index = this.visited.indexOf(this.finalRoute[1])
    this.visited = this.visited.slice(0, index + 1)
    this.nextarr(this.visited[0])
    const first = this.queue
    this.queue = []
    first.forEach((arr) =>{
      if (first[0][0] == this.visited[0][0] && first[0][1] === this.visited[0][1]) {
        this.visited.shift()
      } else {
        this.queue.shift()
      }
    })
  }
}
