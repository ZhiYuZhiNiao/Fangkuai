import { IShape, Direction } from "./IShape.js"
import L from "./L.js"
import { createShape } from './Factory.js'
import ShapeType, { randomCreateShapeType } from "./ShapeType.js"
/* 方块对象 */
class Block {
  shape: IShape
  private curDir: Direction = Math.floor(Math.random() * 4) /* 随机一个 0 - 3之间的数字 */
  private originX: number
  private originY: number
  private mapData: number[][]
  constructor(originX: number, originY: number, mapData: number[][]) {
    this.originX = originX
    this.originY = originY
    this.mapData = mapData
    this.shape = createShape(randomCreateShapeType(), originX, originY, this.curDir)
  }

  move(changX: number, changY: number) {
    /* 移动之前先清空 mapData 数据 */
    this.originX += changX
    this.originY += changY
  }

  rotate() {
    this.curDir++
    this.curDir = this.curDir % 4
  }
}

export default Block