export class Node {
  position: number[]
  nextNode: Node | null
  constructor (position: number[]) {
    this.position = position
    this.nextNode = null
  }
}
