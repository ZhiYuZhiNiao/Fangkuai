import GameObject from "./GameObject.js"
import { LenFourArray } from "./IShape.js"
import { collectShapeType } from './ConstData.js'

@collectShapeType
class I extends GameObject {
  createShapes(x: number, y: number): LenFourArray<Array<{x: number, y: number}>> {
    return [
      [
        {x, y},
        {x, y: y+ 1},
        {x, y: y+2},
        {x, y: y+3}
      ],
      [
        {x, y: y + 2},
        {x: x+1, y: y + 2},
        {x: x+2, y: y+2},
        {x: x+3, y: y+2}
      ],
      [
        {x, y},
        {x, y: y+ 1},
        {x, y: y+2},
        {x, y: y+3}
      ],
      [
        {x, y: y + 2},
        {x: x+1, y: y + 2},
        {x: x+2, y: y+2},
        {x: x+3, y: y+2}
      ]
    ]
  }
}

export default I