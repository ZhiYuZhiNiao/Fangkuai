
import GameObject from "./GameObject.js"
import { LenFourArray } from "./IShape.js"

class J extends GameObject {
  createShapes(x: number, y: number): LenFourArray<Array<{x: number, y: number}>> {
    return [
      [
        {x, y},
        {x, y: y + 1},
        {x, y: y + 2},
        {x: x - 1, y: y+2}
      ],
      [
        {x: x - 1, y: y + 1},
        {x: x-1, y: y+2},
        {x, y: y+2},
        {x: x+1, y: y + 2 }
      ],
      [
        {x:x-1, y},
        {x, y},
        {x: x - 1, y: y + 1},
        {x: x - 1, y: y + 2}
      ],
      [
        {x:x-1, y:y+1},
        {x: x, y:y+1},
        {x: x + 1, y:y+1},
        {x: x + 1, y:y+2}
      ]
    ]
  }
}

export default J
