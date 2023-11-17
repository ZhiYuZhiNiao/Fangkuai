
import { ROW, COL } from './constData.js'
class GameMap {
  /**
   * @description: 二维数组初始全用false填充，有具体的block在里面了，用什么去填充？
   */  
  public static createMap(): number[][] {
    return Array(ROW).fill(0).map(() => Array(COL).fill(false))
  }

  /**
   * @description: 返回的是整个地图容器的DOM元素
   * @param {string} selector
   */  
  public static getMapEl(selector: string): HTMLElement {
    return document.getElementById(selector)!
  }
}

export default GameMap