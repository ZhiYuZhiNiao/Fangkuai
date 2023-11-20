import { getL } from "./L.js"
class GameObject {
  blocks: { x: number, y: number}[]
  curIndex = 0 // 当前处于的旋转状态 0 1 2 3 4
  originX: number
  originY: number
  constructor(fn :(x: number, y: number, randomIndex: number) => { x: number, y: number}[] , x: number, y: number, randomIndex: number) {
    this.blocks = fn(x, y, randomIndex)
    this.curIndex = randomIndex
    this.originX = x
    this.originY = y

  }

  move() {}
  rotate() {

  }
}

export default GameObject