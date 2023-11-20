import { mapData } from './ConstData.js'
class GameMgr {
  private mapEl: HTMLElement
  constructor() {
    this.mapEl = document.getElementById('map')!
  }
  start() {
    this.draw()
  }

  draw() {
    const { mapEl } = this
    for (const row of mapData) {
      const trEl = document.createElement('tr')
      mapEl.appendChild(trEl)
      for (const col of row) {
        const tdEl = document.createElement('td')
        if (col === 1) tdEl.className = 'bg-red'
        else if (col === -1) tdEl.className = 'bg-hui'
        else tdEl.className = 'bg-bai'
        trEl.appendChild(tdEl)
      }
    }
  }
}

export default GameMgr