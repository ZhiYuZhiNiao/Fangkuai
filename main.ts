/* 
  地图大小是 10格子 * 20格子  每个格子大小是 20px * 20px
  map w = 10 * 20 = 200; h = 20 * 20 = 400
  每个格子的坐标都是以左上角的位置为左边 实际格子在 W 方向移动的范围 0 ~ 180， 在H方向移动的范围是 0 ~ 380
*/
import GameMgr from "./src/GameMgr.js";
;(() => {
  const mgr = new GameMgr()
  mgr.start()
})()


