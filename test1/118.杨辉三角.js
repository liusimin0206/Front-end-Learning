/*
 * @Author: your name
 * @Date: 2020-11-19 13:53:34
 * @LastEditTime: 2020-11-19 14:02:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\118.杨辉三角.js
 */
/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var previousRow;
  var currentRow;
  var res = [];
  for (let i = 0; i < numRows; i++) {
    if (i == 0) {
      previousRow = [1];
      currentRow = [1];
    } else {
      previousRow = currentRow;
      currentRow = [];
      currentRow[0] = 1;
      currentRow[i] = 1;
      for (let j = 1; j < currentRow.length - 1; j++) {
        currentRow[j] = previousRow[j - 1] + previousRow[j];
      }
    }
    res.push(currentRow);
  }
  return res;
};
// @lc code=end
console.log(generate(34));
