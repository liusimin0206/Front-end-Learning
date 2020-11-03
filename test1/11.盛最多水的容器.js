/*
 * @Author: your name
 * @Date: 2020-10-30 16:36:57
 * @LastEditTime: 2020-11-02 11:15:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\11.盛最多水的容器.js
 */
/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = -1;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const lVal = height[left];
    const rVal = height[right];

    const w = right - left;

    if (lVal > rVal) {
      maxArea = Math.max(rVal * w, maxArea);
      right--;
    } else {
      maxArea = Math.max(lVal * w, maxArea);
      left++;
    }
  }

  return maxArea;
};
// @lc code=end

/**
 * @name: 方法1
 * @param {*} height
 * @return {*}
 */
function maxArea1(height) {
  function min(a, b) {
    return a < b ? a : b;
  }
  let tempH = 0,
    tempD = 0,
    max = 0,
    num = height.length;
  for (let i = 0; i < num - 1; i++) {
    for (let j = i + 1; j < num; j++) {
      tempH = min(height[i], height[j]);
      tempD = j - i;
      let res = tempD * tempH;
      if (max < res) {
        max = res;
      }
    }
  }
  return max;
}
