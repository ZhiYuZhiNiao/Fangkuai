class GameObject {
    constructor(x, y, dirState) {
        this.originX = x;
        this.originY = y;
        this.shapes = this.createShapes(x, y);
        this.dirState = dirState;
    }
    get shape() {
        return this.shapes[this.dirState];
    }
    /* 每次移动, 都会生成一个新的 游戏元素对象? */
    move(changX, changY) {
        this.originX += changX;
        this.originY += changY;
    }
    /* 每次旋转都是 dirState 在变,  */
    rotate() {
        this.dirState++;
        this.dirState = this.dirState % 4;
    }
}
export default GameObject;
