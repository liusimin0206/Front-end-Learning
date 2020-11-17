/*
 * @Author: your name
 * @Date: 2020-11-17 09:23:43
 * @LastEditTime: 2020-11-17 10:18:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\1030.距离顺序排列矩阵单元格.js
 */
/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  let dr = [1, 1, -1, -1];
  let dc = [1, -1, -1, 1];
  let maxDist = Math.max(r0, R - 1 - r0) + Math.max(c0, C - 1 - c0);
  let res = [];
  let row = r0,
    col = c0;
  res[0] = [r0, c0];
  let index = 1;
  for (let dist = 1; dist <= maxDist; dist++) {
    row--;
    for (let i = 0; i < 4; i++) {
      while ((i % 2 == 0 && row != r0) || (i % 2 != 0 && col != c0)) {
        //边界条件
        if (row >= 0 && row < R && col >= 0 && col < C) {
          res[index++] = [row, col];
        }
        row += dr[i];
        col += dc[i];
      }
    }
  }
  return res;
};
// @lc code=end
console.log(allCellsDistOrder(2, 3, 1, 2));
