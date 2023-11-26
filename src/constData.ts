/* 
  20 row * 10 col
  unit 20px
*/
import GameObject from "./GameObject"

const ROW = 20
const COL = 10
const UNIT = 20
const SHAPE_TYPE_LIST: (new (x: number, y: number) => GameObject)[] = []
const collectShapeType = (value: (new (x: number, y: number) => GameObject)[]) => {
  console.log('开始收集啦value', value)
  SHAPE_TYPE_LIST.push(...value)
}

/* 
  使用 mapData 数据来渲染 整个画面
  0 表示空的在状态 白色
  1 表示当前方块所在位置 pink 色吧
  -1 表示方块不可移动, 灰色
 */


export { ROW, COL, UNIT, collectShapeType, SHAPE_TYPE_LIST }