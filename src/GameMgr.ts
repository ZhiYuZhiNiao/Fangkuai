/*
 * @Author: 陈天敏 18082020969@163.com
 * @Date: 2023-11-25 15:49:41
 * @LastEditors: ctm 18082020969@163.com
 * @LastEditTime: 2023-11-29 19:34:24
 * @FilePath: \Fangkuai\src\GameMgr.ts
 * @Description: 描述
 */

import { ROW, COL } from './constData.js'
import Factory from './Factory.js'
import GameObject from './GameObject.js'
import L from './L.js'
class GameMgr {
  private mapEl: HTMLElement
  /* 0 无, 1 有颜色, -1 灰色 */
  private mapData: number[][] = Array(ROW).fill(0).map(_ => Array(COL).fill(0))
  private block!: GameObject
  private speed = 1
  private score = 0
  private isGameOver = false
  private autoTimer = -1

  constructor() {
    this.mapEl = document.getElementById('map')!
  }
  start() {
    this.init()
  }

  private init() {
    this.block = new L(4, 0, 0)
    /* 状态变化, 重新画 */
    this.coloredBlock()

    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'w':
          this.rotate()
          break
        case 'a':
          this.moverLR(-1, 0, this.checkMoveL.bind(this))
          break
        case 'd':
          this.moverLR(1, 0, this.checkMoveR.bind(this))
          break
        case 's':
          this.moveDown(1)
          break
      }
    })

    /* 自动下降 */
    this.autoTimer = setInterval(this.moveDown.bind(this), 700 / this.speed)
  }

  private checkGameOver() {
    const { mapData } = this
    return mapData[0].some(val => val === -1)
  }

  /* 检测是否填充满了一行 */
  private findFullRow(block: GameObject): number[] {
    const { shape } = block
    const { mapData } = this
    /* 判断固定的 shape 所处于的每一行是否已经被填满 */
    const res = shape.reduce((prev: number[], el) => {
      if (mapData[el.y].every(val => val === -1)) {
        prev.push(el.y)
      }
      return prev
    }, []).sort((a, b) => a - b)
    return [...new Set(res)] // 去重
  }

  private checkMoveL() {
    const { block, mapData } = this
    return block.shape.some(({x, y}) => x <= 0 || mapData[y][x - 1] === -1)
  }

  private checkMoveR() {
    const { block, mapData } = this
    return block.shape.some(({x, y}) => x >= COL - 1 || mapData[y][x+1] === -1)
  }

  private checkMoveDown() {
    const { block, mapData } = this
    return block.shape.some(({x, y}) => y >= ROW - 1 || mapData[y + 1][x] === -1)
  }

  /* 旋转这里还是有点问题 */
  private checkRotateFixed() {
    const { block, mapData } = this
    // 判断如果旋转之后，是否会和原来固定位置产生重合，说明就旋转不了
    // 先虚拟的执行一次旋转
    const tempState = (block.dirState + 1) % 4
    const rotatedBlock = new L(block.originX, block.originY, tempState)
    const shape = rotatedBlock.shape
    return shape.some(({x, y}) => mapData[y][x] === -1 || x < 0 || x > COL - 1)
  }

  // 和墙碰撞测试，如果超出了强。则需要强制移动回去
  private repairRotateWall() {
    const { block, mapData } = this
    // 判断如果旋转之后，是否会和原来固定位置产生重合，说明就旋转不了
    // 先虚拟的执行一次旋转
    const tempState = (block.dirState + 1) % 4
    const rotatedBlock = new L(block.originX, block.originY, tempState)
    const shape = rotatedBlock.shape
    const maxX = Math.max(...shape.map(({ x }) => x))
    const minX = Math.min(...shape.map(({ x }) => x))
    // 如果最大的 x >= COL 说明在外面了，需要移动回去, 
    if (maxX > COL - 1) {
      // 左移， 都只是 clear 并没有 coloredBlock
      this.clearBlock()
      this.moverLR((COL - 1) - maxX, 0, this.checkMoveL.bind(this))
      return true
    }

    if (minX < 0) {
      // 右移
      this.clearBlock()
      this.moverLR(0-minX, 0, this.checkMoveR.bind(this))
      return true
    }
    return false
  }

  private rotate() {
    const { block } = this
    // 清空上一次状态
    this.clearBlock()
    if (!this.checkRotateFixed()) {
      // 没有碰撞, 直接旋转
      block.rotate()
      // 产生新
      this.block = new L(block.originX, block.originY, block.dirState)
    } else {
      // 碰撞到了
    }
    this.coloredBlock()
  }

  private moverLR(changeX: number, changY: number, check: ()=> boolean) {
    const { block } = this
    // 清空上一次状态
    this.clearBlock()
    if (!check()) {
      // 没有碰撞到，就移动
      block.move(changeX, changY)
      this.block = new L(block.originX, block.originY, block.dirState)
    } else {
      // 碰撞到了,
    }
    this.coloredBlock()
  }

  private moveDown(step: number) {
    const { block } = this
    // 清空上一次状态
    this.clearBlock()
    // 是否碰撞到了, true 说明碰撞到了
    if (!this.checkMoveDown()) {
      block.move(0, step)
      this.block = new L(block.originX, block.originY, block.dirState)
    } else {
      // 碰撞到了
      this.fixedBlock()
      // 查找哪些行已经被填满了, 得到的结果是升序的
      const fullRowIndexs = this.findFullRow(block)
      const { length } = fullRowIndexs
      if (length) {
        /* 销毁 */
        this.destryBlock(fullRowIndexs)
        this.setScore(fullRowIndexs)
      }
      if(this.checkGameOver()) {
        this.isGameOver = true
        clearInterval(this.autoTimer)
        alert('游戏结束')
        return
      }
      // 初始位置生成一个新的block(应该是一个随机的方块)
      this.block = new L(4, 0, 0)
    }
    this.coloredBlock()
  }

  setScore(fullRowIndexs: number[]) {
    const { length } = fullRowIndexs
    console.log('fullRowIndexs', fullRowIndexs)
    this.score = fullRowIndexs.reduce((prev) => {
      prev += length * 10
      return prev
    }, this.score)
    console.log('score', this.score)
  }

  private destryBlock(rowIndexs: number[]) {
    const { mapData } = this
    for (const r of rowIndexs) {
      for (let c = 0; c < COL; c++) {
        mapData[r][c] = 0 // 清空
      }
    }
    /* 整体下移 */
    this.moveDownOne(rowIndexs)       
    this.draw()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  }

  /* 这些行上面都 向下移动一行, 从后向前遍历 */
  private moveDownOne(rowIndexs: number[]) {
    const { mapData } = this
    for (const r of rowIndexs) {
      for (let i = r; i >= 1 ; i--) {
        mapData[i] = [...mapData[i - 1]]
      }
    }
  }

  private coloredBlock() {
    const { block } = this
    this.setMapDataState(block, 1)
  }

  private fixedBlock() {
    const { block } = this
    this.setMapDataState(block, -1)
  }

  private clearBlock() {
    const { block } = this
    this.setMapDataState(block, 0)
  }

  private setMapDataState(block: GameObject, state: number) {
    const { mapData } = this
    for (const {x, y} of block.shape) {
      // x col, y row
      mapData[y][x] = state
    }
    this.draw()
  }

  private draw() {
    const { mapEl } = this
    mapEl.innerHTML = ''
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