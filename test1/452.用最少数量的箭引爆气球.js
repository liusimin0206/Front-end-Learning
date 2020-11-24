/*
 * @Author: your name
 * @Date: 2020-11-23 14:48:08
 * @LastEditTime: 2020-11-23 16:33:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\452.用最少数量的箭引爆气球.js
 */
/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (!points.length) {
    return 0;
  }
  points.sort((a, b) => {
    return a[1] - b[1];
  });
  let rightborder = points[0][1];
  let res = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > rightborder) {
      res++;
      rightborder = points[i][1];
    }
  }

  return res;
};
// @lc code=end
console.log(
  findMinArrowShots([
    [0, 6],
    [3, 8],
    [6, 8],
    [2, 8],
    [3, 9],
    [2, 9],
    [0, 9],
    [3, 9],
    [9, 10],
    [7, 12]
  ])
);
