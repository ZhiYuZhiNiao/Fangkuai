/*
 * @Author: 陈天敏 18082020969@163.com
 * @Date: 2023-11-25 15:49:41
 * @LastEditors: 陈天敏 18082020969@163.com
 * @LastEditTime: 2023-11-26 21:56:58
 * @FilePath: \Fangkuai\src\I.ts
 * @Description: 描述
 */
import GameObject from "./GameObject.js"
import { LenFourArray } from "./IShape.js"
class I extends GameObject {
  createShapes(x: number, y: number): LenFourArray<Array<{x: number, y: number}>> {
    return [
      [
        {x, y},
        {x, y: y+ 1},
        {x, y: y+2},
        {x, y: y+3}
      ],
      [
        {x, y: y + 2},
        {x: x+1, y: y + 2},
        {x: x+2, y: y+2},
        {x: x+3, y: y+2}
      ],
      [
        {x, y},
        {x, y: y+ 1},
        {x, y: y+2},
        {x, y: y+3}
      ],
      [
        {x, y: y + 2},
        {x: x+1, y: y + 2},
        {x: x+2, y: y+2},
        {x: x+3, y: y+2}
      ]
    ]
  }
}

export default I