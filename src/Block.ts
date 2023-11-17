import { UNIT } from './constData.js'
class Block {
  private el: HTMLElement
  constructor(el: HTMLElement, color: string) {
    this.el = el
    this.color = color
  }

  /* 真实的DOM元素坐标和 block的坐标需要转换一下 */
  get x() {
    return this.el.offsetLeft / UNIT
  }

  set x(val) {
    this.el.style.left = (val * UNIT) + 'px'
  }

  get y() {
    return this.el.offsetTop / UNIT
  }

  set y(val) {
    this.el.style.top = (val * UNIT) + 'px'
  }

  get color() {
    return this.el.style.color
  }

  set color(val) {
    this.el.style.color = val
  }

}

export default Block