/* 
  20 row * 10 col
  unit 20px
*/
import GameObject from "./GameObject"
import L from './L.js'
import J from './J.js'
import I from './I.js'
import O from './O.js'

const ROW = 20
const COL = 10
const UNIT = 20
const SHAPE_TYPE_LIST: (new (x: number, y: number) => GameObject)[] = []
const collectShapeType = (value: (new (x: number, y: number) => GameObject)[]) => {
  console.log('开始收集啦value', value)
  SHAPE_TYPE_LIST.push(...value)
}

const SHAPE_TYPE_MAP: Map<number, new (x: number, y: number, dirState: number) => GameObject> = new Map()
SHAPE_TYPE_MAP.set(0, L).set(1, J).set(2, I).set(3, O)
/* 
  使用 mapData 数据来渲染 整个画面
  0 表示空的在状态 白色
  1 表示当前方块所在位置 pink 色吧
  -1 表示方块不可移动, 灰色
 */


export { ROW, COL, UNIT, collectShapeType, SHAPE_TYPE_LIST, SHAPE_TYPE_MAP }