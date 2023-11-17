import { matrixMul } from './utils.js';
class GameObject {
    constructor() {
        this.blocks = [];
    }
    move(key) {
        switch (key) {
            case 'a':
            case 'arrowleft':
                this.blocks.forEach(block => block.x -= 1);
                break;
            case 'd':
            case 'arrowright':
                this.blocks.forEach(block => block.x += 1);
                break;
            case 's':
            case 'arrowdown':
                this.blocks.forEach(block => block.y += 1);
                break;
        }
    }
    /* 默认每次移动一个单元, 一个单元 20px */
    autoMove() {
        this.blocks.forEach(block => block.y += 1);
    }
    rotate() {
        this.blocks.forEach(block => {
            // 顺时针旋转 90度,, 第三个参数代表移动
            const [x, y] = matrixMul([block.x, block.y], [[0, 1, 0], [-1, 0, 0]]);
            block.x = x;
            block.y = y;
        });
    }
}
export default GameObject;
