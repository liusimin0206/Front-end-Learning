/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let zhouChang = 0;
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      if (grid[col][row] === 1) {
        if (!grid[col + 1]) {
          zhouChang++;
        } else if (!grid[col + 1][row]) {
          zhouChang++;
        }
        if (!grid[col - 1]) {
          zhouChang++;
        } else if (!grid[col - 1][row]) {
          zhouChang++;
        }
        if (!grid[col][row + 1]) {
          zhouChang++;
        }
        if (!grid[col][row - 1]) {
          zhouChang++;
        }
      }
    }
  }
  return zhouChang;
};
// @lc code=end
islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]);
