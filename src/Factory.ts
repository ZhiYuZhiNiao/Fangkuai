import ShapeType from './ShapeType.js'
import L from './L.js'
import { Direction, IShape } from './IShape'
const shapeTypeMap = {
  [ShapeType.L]: L,
  [ShapeType.J]: L,
  [ShapeType.O]: L,
  [ShapeType.T]: L,
  [ShapeType.Z]: L,
  [ShapeType.S]: L,
  [ShapeType.I]: L
}

function createShape(type: ShapeType, originX: number, originY: number, dir: Direction) {
  return new shapeTypeMap[type](originX, originY, dir)
}

export { createShape }