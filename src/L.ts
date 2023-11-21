import { Direction, IShape } from "./IShape.js"
import type { LenFourArray } from './IShape.js'
class L implements IShape {
  data: LenFourArray<Array<{ x: number, y: number }>>
  dir: Direction
  constructor(originX: number, originY: number, dir: Direction) {
    this.dir = dir
    const x = originX
    const y = originY
    this.data = [
      [
        {x, y: y - 2},
        {x, y: y - 1},
        {x, y},
        {x: x + 1, y},
      ],
      [
        {x, y: y - 1},
        {x, y},
        {x: x + 1, y: y - 1},
        {x: x + 2, y: y - 1},
      ],
      [
        {x, y: y -2},
        {x: x + 1, y: y - 2},
        {x: x + 1, y: y - 1},
        {x: x + 1, y},
      ],
      [
        {x, y},
        {x: x + 1, y},
        {x: x + 2, y},
        {x: x + 2, y: y - 1}
      ]
    ]
  }
  
}

export default L


