/* 
  每个方块对象都有一个形状的属性
*/
// 自定义类型，可以用来限制数组长度
type FixedLengthArray<T, N extends number> = [T, ...T[]] & { length: N }
type LenFourArray<T> = FixedLengthArray<T, 4>

/* x, y 是原点， data 是描述 原点和其他点的关系 每种形状正常都有4种状态, 所以限制了数组长度为 4 */
interface IShape {
  originX: number
  originY: number
  shapes: LenFourArray<Array<{x: number, y: number}>>
  createShapes(x: number, y: number): LenFourArray<Array<{x: number, y: number}>>
}

export default IShape
export type { LenFourArray }

