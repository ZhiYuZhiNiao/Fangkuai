
import { ROW, COL } from './ConstData.js'
import Factory from './Factory.js'
import GameObject from './GameObject.js'
class GameMgr {
  private mapEl: HTMLElement
  /* 0 无, 1 有颜色, -1 灰色 */
  private mapData = Array(ROW).fill(0).map(_ => Array(COL).fill(0))
  private factory = Factory.factoryInstance
  private block!: GameObject
  constructor() {
    this.mapEl = document.getElementById('map')!
  }
  start() {
    this.init()
  }

  private init() {
    const { factory, rotateBefore, moveBefore } = this
    this.block = new factory.randomGameObjClass(4, 0)
    /* 状态变化, 重新画 */
    this.showBlock(this.block)
    this.draw()

    window.addEventListener('keydown', (e) => {
      const { block } = this
      if (e.key === 'w') block.rotate(rotateBefore.bind(this))
      else this.block.move(moveBefore.bind(this), e.key)
    })
  }

  private moveBefore(shape: {x: number, y: number}[]) {
    return false
  }

  private rotateBefore(shape: {x: number, y: number}[]) {
    return false
  }

  private showBlock(block: GameObject) {
    this.setMapDataState(block, 1)
  }

  private clearBlock(block: GameObject) {
    this.setMapDataState(block, 0)
  }

  private setMapDataState(block: GameObject, state: number) {
    const { mapData } = this
    for (const {x, y} of block.shape) {
      // x col, y row
      mapData[y][x] = state
    }
  }

  private draw() {
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