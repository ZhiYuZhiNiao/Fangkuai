import GameObject from "./GameObject.js";
import Block from "./Block.js";
import { L, LColor } from './L.js';
import GameMap from "./GameMap.js";
import BlocksType from "./BlocksType.js";
/*
  每个方块的创建都是在一个 4 * 4 的坐标里面创建的
  他们都有一个初始的坐标来表示他
 */
const createGameObj = (blocksType) => {
    const gameObj = new GameObject();
    switch (blocksType) {
        case BlocksType.L:
            gameObj.blocks = createBlocks(L, LColor);
            break;
        case BlocksType.J:
            break;
        case BlocksType.I:
            break;
        case BlocksType.O:
            break;
        case BlocksType.S:
            break;
        case BlocksType.Z:
            break;
        case BlocksType.T:
            break;
    }
    return gameObj;
};
function createBlocks(initCoordinates, color) {
    const blocks = [];
    for (const { x, y } of initCoordinates) {
        const el = document.createElement('div');
        el.classList.add('block');
        GameMap.getMapEl('game-map').insertAdjacentElement('beforeend', el);
        const block = new Block(el, color);
        console.log('x--', x);
        console.log('y--', y);
        // 初始坐标, 需要向右移动 5个单元, 到达中间位置
        const moveX = 5;
        block.x = x + moveX;
        block.y = y;
        blocks.push(block);
    }
    return blocks;
}
export { createGameObj };
