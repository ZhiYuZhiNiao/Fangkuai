export const matrixMul = (ary: [number, number], matrix: [[number, number, number], [number, number, number]]): [number, number] => {
  const res: number[] = []
  const [x, y, z = 1] = ary
  for (const [a, b, c] of matrix) {
    res.push(a * x + b * y + c * z)
  }
  return res as [number, number]
}

export const rotateMap = {
  90: [[0, 1], [-1, 0]] as [[number, number], [number, number]]
  // 180: [[-1, 0], [0, -1]] as [[number, number], [number, number]],
  // 270: [[0, -1], [1, 0]] as [[number, number], [number, number]],
}

export const matrix3Mul3 = (matrix1: number[], matrix2: number[]) => {
  
}