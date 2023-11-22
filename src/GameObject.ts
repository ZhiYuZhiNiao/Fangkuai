import IShape from "./IShape.js"
import type { LenFourArray } from './IShape.js'
abstract class GameObject implements IShape {
  originX: number
  originY: number
  dirState: number // 方向状态, 0, 1, ,2 ,3 
  shapes: LenFourArray<Array<{x: number, y: number}>>
  constructor(x: number, y: number) {
    this.originX = x
    this.originY = y
    this.shapes = this.createShapes(x, y)
    this.dirState = 0
  }

  get shape() {
    return this.shapes[this.dirState]
  }

  /* 生成的数据结构，代表 某个形状的 4 种状态 */
  abstract createShapes(x: number, y: number): LenFourArray<Array<{x: number, y: number}>>

  /* 每次移动, 都会生成一个新的 游戏元素对象? */
  move(moveBefore: (shape: {x: number, y: number}[]) => boolean, key: string) {
    if (!moveBefore(this.shape)) return
    switch(key) {
      case 's':
        this.originY += 1
        break
      case 'a':
        this.originX -= 1
        break
      case 'd':
        this.originX += 1
        break
    }
  }

  /* 每次旋转都是 dirState 在变,  */
  rotate(rotateBefore: (shape: {x: number, y: number }[]) => boolean) {
    if (!rotateBefore(this.shape)) return
    this.dirState++
    this.dirState = this.dirState % 4
  }
}


export default GameObject