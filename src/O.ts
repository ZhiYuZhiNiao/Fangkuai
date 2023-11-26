import GameObject from "./GameObject.js"
import { LenFourArray } from "./IShape.js"

class O extends GameObject {
  createShapes(x: number, y: number): LenFourArray<Array<{x: number, y: number}>> {
    return [
      [
        {x, y},
        {x: x+1, y},
        {x, y: y+1},
        {x: x+1, y: y+1}
      ],
      [
        {x, y},
        {x: x+1, y},
        {x, y: y+1},
        {x: x+1, y: y+1}
      ],
      [
        {x, y},
        {x: x+1, y},
        {x, y: y+1},
        {x: x+1, y: y+1}
      ],
      [
        {x, y},
        {x: x+1, y},
        {x, y: y+1},
        {x: x+1, y: y+1}
      ]
    ]
  }
}

export default O