/*
 * @Author: your name
 * @Date: 2020-11-02 16:15:35
 * @LastEditTime: 2020-11-02 16:53:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\27.移除元素.js
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let start = 0,
    end = nums.length - 1,
    cishu = 0;
  while (true) {
    if (nums[start] == val) {
      while (true) {
        if (nums[end] == val) {
          end--;

          if (start >= end) {
            break;
          }
        } else {
          // 交换
          let temp = nums[start];
          nums[start] = nums[end];
          nums[end] = temp;
          start++;
          end--;
          break;
        }
      }
    } else {
      start++;
    }
    if (start >= end) {
      break;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      cishu++;
    }
  }
  return nums.length - cishu;
};

// @lc code=end
console.log(removeElement([3, 2, 2, 3], 2));
