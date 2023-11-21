/* 
  每个方块对象都有一个形状的属性
*/
// 自定义类型，可以用来限制数组长度
type FixedLengthArray<T, N extends number> = [T, ...T[]] & { length: N }
type LenFourArray<T> = FixedLengthArray<T, 4>

enum Direction {
  top, down, left, right
}

interface IShape {
  data: LenFourArray<Array<{ x: number, y: number }>>
  dir: Direction
}

export { IShape, Direction }
export type { LenFourArray }
