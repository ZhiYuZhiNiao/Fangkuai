/**
 * @description: 
 * @param {number} x 原点x
 * @param {number} y  原点
 * @param {number} randomIndex 随机的一个方向
 * @return {*}
 */
function getL(x: number, y: number, randomIndex: number) {
  // L 的四种形态,
  const data = [
    [
      {x, y: y - 2},
      {x, y: y - 1},
      {x, y},
      {x: x + 1, y},
    ],
    [
      {x, y: y - 1},
      {x, y},
      {x: x + 1, y: y - 1},
      {x: x + 2, y: y - 1},
    ],
    [
      {x, y: y -2},
      {x: x + 1, y: y - 2},
      {x: x + 1, y: y - 1},
      {x: x + 1, y},
    ],
    [
      {x, y},
      {x: x + 1, y},
      {x: x + 2, y},
      {x: x + 2, y: y - 1}
    ]
  ]
  return data[randomIndex]
}

export { getL }


