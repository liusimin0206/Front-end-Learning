/*
 * @Author: liusimin
 * @Date: 2020-12-01 09:54:02
 * @LastEditors: your name
 * @LastEditTime: 2020-12-01 10:36:08
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
const binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1,
    ans = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      ans = mid;
      return ans;
    }
  }
  return ans;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let index = binarySearch(nums, target);
  let res = [index, index];
  if (index == -1) {
    return res;
  }

  for (let i = index - 1; i >= -1; i--) {
    if (nums[i] != target) {
      res[0] = i + 1;
      break;
    }
  }
  for (let j = index + 1; j <= nums.length; j++) {
    if (nums[j] != target) {
      res[1] = j - 1;
      break;
    }
  }
  return res;
};
// @lc code=end
console.log(searchRange([2, 2], 2));
