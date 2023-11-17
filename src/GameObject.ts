/* GameObject都是待加工的，经过加工之后才会变成 一个个方块对象  */
import Block from './Block.js'
import { matrixMul, rotateMap } from './utils.js'
class GameObject {
  blocks: Block[] = []
  move(key: string) {
    switch(key) {
      case 'a':
      case 'arrowleft':
        this.blocks.forEach(block => block.x -= 1)
        break
      case 'd':
      case 'arrowright':
        this.blocks.forEach(block => block.x += 1)
        break
      case 's':
      case 'arrowdown':
        this.blocks.forEach(block => block.y += 1)
        break
    }
  }
  /* 默认每次移动一个单元, 一个单元 20px */
  autoMove() {
    this.blocks.forEach(block => block.y += 1)
  }
  rotate() {
    // 先找出集合中最小的 x 和 y，然后根据最小的 x, y 先移回原点, 旋转 然后再移动回去
    const { blocks } = this
    const minX = Math.min(...blocks.map(block => block.x))
    const minY = Math.min(...blocks.map(block => block.y))
    // 这里需要矩阵乘法
    blocks.forEach(block => {
      // 顺时针旋转 90度, 注意的是需要先移动到原点
      const [x, y] = matrixMul([block.x, block.y], [[0, 1, 0], [-1, 0, 0]])
      block.x = x
      block.y = y
    })
  }
}

export default GameObject