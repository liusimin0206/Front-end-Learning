/*
 * @Author: your name
 * @Date: 2020-11-18 10:06:21
 * @LastEditTime: 2020-11-18 10:47:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\134.加油站.js
 */
/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let len = gas.length;
  let zongyouliang = 0;
  let dangqianyouliang = 0;
  let start = 0;
  for (let i = 0; i < len; i++) {
    zongyouliang += gas[i] - cost[i];
    dangqianyouliang += gas[i] - cost[i];
    if (dangqianyouliang < 0) {
      dangqianyouliang = 0;
      start = i + 1;
    }
  }
  return zongyouliang < 0 ? -1 : start;
};
// @lc code=end
console.log(canCompleteCircuit([2, 3, 5], [3, 4, 3]));
