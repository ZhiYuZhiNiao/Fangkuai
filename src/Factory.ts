
import { SHAPE_TYPE_LIST } from './constData.js'
class Factory {
  private static instance: Factory
  private constructor() {}
  static get factoryInstance() {
    if(Factory.instance) return Factory.instance
    return new Factory()
  }

  get randomGameObjClass() {
    const { length } = SHAPE_TYPE_LIST
    const index = Math.floor(Math.random() * length)
    return SHAPE_TYPE_LIST[index]
  }
}

export default Factory

