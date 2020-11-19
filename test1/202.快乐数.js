/*
 * @Author: your name
 * @Date: 2020-11-19 14:39:51
 * @LastEditTime: 2020-11-19 14:45:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\202.快乐数.js
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
function getNext(n) {
  let str = String(n);
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res += Math.pow(Number(str[i]), 2);
  }
  return res;
}
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = n,
    fast = n;
  while (true) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
    if (fast == 1) {
      return true;
    }
    if (slow == fast) {
      return false;
    }
  }
};
// @lc code=end
