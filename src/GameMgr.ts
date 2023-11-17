import GameMap from "./GameMap.js"
import { createGameObj } from './Factory.js'
import BlocksType from "./BlocksType.js"
import { matrixMul, matrix3Mul3 } from './utils.js'
import GameObject from "./GameObject.js"
import { ROW, COL, UNIT } from './constData'
class GameMgr {
  autoSpeed: number = 1


  start() {

    const temp = matrix3Mul3([
      [1, 2, 1],
      [1, 2, 0],
      [1, 2, 3]
    ], [
      [0, 1, 2],
      [1, 2, 3],
      [1, 1, 2],
    ])

    console.log('temp', temp)



    const gameMap = GameMap.createMap()
    console.log('gameMap', gameMap)
    const curObj = createGameObj(BlocksType.L)

    /* 自动向下移动, 1秒移动 1个单元 */
    setInterval(() => {
      // 移动之前进行检测
      curObj.autoMove()
    }, 1000 / this.autoSpeed)

    /* 监控按键按下 */
    document.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase()
      if (key === 'w' || key === 'arrowup') {
        // 变形的时候下降速度变慢
        this.autoSpeed = this.autoSpeed * 0.75
        // 旋转之前需要进行检测
        curObj.rotate()
      } else {
        // 移动之前进行检测
        curObj.move(key)
      }
    })
  }

  checkGameObjRotate(gameObj: GameObject) {
    for (const block of gameObj.blocks) {
      // 旋转之后的结果
      // const [x, y] = matrixMul([block.x, block.y], rotateMap[90])
      // x 轴范围 0 ~ COL -1, Y轴范围 0 ~ ROW - 1
    }
    return true
  }

  checkGameObjMove(gameObj: GameObject) {}
}

export default GameMgr