enum ShapeType {
  L,J,I,O,Z,S,T
}

function randomCreateShapeType():ShapeType  {
  return Math.floor(Math.random() * 7)
}
export { randomCreateShapeType }
export default ShapeType