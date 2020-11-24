/*
 * @Author: your name
 * @Date: 2020-11-24 12:10:51
 * @LastEditTime: 2020-11-24 14:01:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\414.第三大的数.js
 */
/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let arr = [
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY
  ];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (nums[i] > arr[j]) {
        if (j == 0) {
          arr[2] = arr[1];
          arr[1] = arr[0];
          arr[0] = nums[i];
        } else {
          arr[j + 1] = arr[j];
          arr[j] = nums[i];
        }
        break;
      } else if (nums[i] == arr[j]) {
        break;
      }
    }
  }
  return arr[2] == Number.NEGATIVE_INFINITY ? arr[0] : arr[2];
};
// @lc code=end
console.log(thirdMax([1, -2147483648, 2]));
