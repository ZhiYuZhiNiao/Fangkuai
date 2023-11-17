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
