/*
 * @Author: 陈天敏 18082020969@163.com
 * @Date: 2023-11-25 15:49:41
 * @LastEditors: 陈天敏 18082020969@163.com
 * @LastEditTime: 2023-11-26 21:56:32
 * @FilePath: \Fangkuai\src\L.ts
 * @Description: 描述
 */
import GameObject from "./GameObject.js";
class L extends GameObject {
    createShapes(x, y) {
        return [
            [
                { x, y },
                { x, y: y + 1 },
                { x, y: y + 2 },
                { x: x + 1, y: y + 2 }
            ],
            [
                { x, y: y + 1 },
                { x: x + 1, y: y + 1 },
                { x: x + 2, y: y + 1 },
                { x, y: y + 2 }
            ],
            [
                { x, y },
                { x: x + 1, y },
                { x: x + 1, y: y + 1 },
                { x: x + 1, y: y + 2 }
            ],
            [
                { x, y: y + 1 },
                { x: x + 1, y: y + 1 },
                { x: x + 2, y: y + 1 },
                { x: x + 2, y }
            ]
        ];
    }
}
export default L;
