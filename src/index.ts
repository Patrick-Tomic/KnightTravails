/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Game from './knight'

const game = new Game([2, 0], [6, 3])
game.findEnd()
console.log(game.visited)
console.log(game.finalRoute)
game.findRoute()
