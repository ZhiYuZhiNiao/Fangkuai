import Block from './Block.js'
import { ROW, COL } from './ConstData.js'
import { createShape } from './Factory.js'
import { randomCreateShapeType } from './ShapeType.js'
class GameMgr {
  private mapEl: HTMLElement
  private mapData = Array(ROW).fill(0).map(_ => Array(COL).fill(0))
  private block: Block
  constructor() {
    this.mapEl = document.getElementById('map')!
    this.block = new Block(4, 2, this.mapData)
  }
  start() {
    const { block } = this
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'w':
          block.rotate()
          break
        case 'a':
          block.move(-1, 0)
          break
        case 'd':
          block.move(1, 0)
          break
        case 's':
          block.move(0, 1)
          break
      }
    })
  }

  draw() {
    const { mapEl } = this
    for (const row of this.mapData) {
      const trEl = document.createElement('tr')
      mapEl.appendChild(trEl)
      for (const col of row) {
        const tdEl = document.createElement('td')
        if (col === 1) tdEl.className = 'bg-red'
        else if (col === -1) tdEl.className = 'bg-hui'
        trEl.appendChild(tdEl)
      }
    }
  }
}

export default GameMgr