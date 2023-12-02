import GameObject from "./GameObject.js";
class J extends GameObject {
    createShapes(x, y) {
        return [
            [
                { x, y },
                { x, y: y + 1 },
                { x, y: y + 2 },
                { x: x - 1, y: y + 2 }
            ],
            [
                { x: x - 1, y: y + 1 },
                { x: x - 1, y: y + 2 },
                { x, y: y + 2 },
                { x: x + 1, y: y + 2 }
            ],
            [
                { x: x - 1, y },
                { x, y },
                { x: x - 1, y: y + 1 },
                { x: x - 1, y: y + 2 }
            ],
            [
                { x: x - 1, y: y + 1 },
                { x: x, y: y + 1 },
                { x: x + 1, y: y + 1 },
                { x: x + 1, y: y + 2 }
            ]
        ];
    }
}
export default J;
