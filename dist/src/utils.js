export const matrixMul = (ary, matrix) => {
    const res = [];
    const [x, y, z = 1] = ary;
    for (const [a, b, c] of matrix) {
        res.push(a * x + b * y + c * z);
    }
    return res;
};
export const rotateMap = {
    90: [[0, 1], [-1, 0]]
    // 180: [[-1, 0], [0, -1]] as [[number, number], [number, number]],
    // 270: [[0, -1], [1, 0]] as [[number, number], [number, number]],
};
/* 1 的第一行 和 2的 第一列相乘 */
export const matrix3Mul3 = (matrix1, matrix2) => {
    const res = [[], [], []];
    for (let r = 0; r < matrix1.length; r++) {
        for (let c = 0; c < matrix2.length; c++) {
            console.log(`${matrix1[r][c]} * ${matrix2[c][r]}`);
            res[r][c] = matrix1[r][c] * matrix2[c][r];
        }
    }
    return res;
};
