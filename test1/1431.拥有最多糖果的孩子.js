/*
 * @Author: liusimin
 * @Date: 2020-12-01 17:38:48
 * @LastEditors: your name
 * @LastEditTime: 2020-12-01 17:52:06
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (max < candies[i]) {
      max = candies[i];
    }
    candies[i] += extraCandies;
  }
  for (let i = 0; i < candies.length; i++) {
    if (max <= candies[i]) {
      candies[i] = true;
    } else {
      candies[i] = false;
    }
  }
  return candies;
};
// @lc code=end
