import GameObject from "./GameObject.js";
class O extends GameObject {
    createShapes(x, y) {
        return [
            [
                { x, y },
                { x: x + 1, y },
                { x, y: y + 1 },
                { x: x + 1, y: y + 1 }
            ],
            [
                { x, y },
                { x: x + 1, y },
                { x, y: y + 1 },
                { x: x + 1, y: y + 1 }
            ],
            [
                { x, y },
                { x: x + 1, y },
                { x, y: y + 1 },
                { x: x + 1, y: y + 1 }
            ],
            [
                { x, y },
                { x: x + 1, y },
                { x, y: y + 1 },
                { x: x + 1, y: y + 1 }
            ]
        ];
    }
}
export default O;
