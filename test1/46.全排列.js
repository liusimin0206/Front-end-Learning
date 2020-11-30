/*
 * @Author: liusimin
 */
/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
function add(arr2, num) {
  let res = [];
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    for (let j = 0; j <= element.length; j++) {
      let temp = element.slice();
      temp.splice(j, 0, num);
      res.push(temp);
    }
  }
  return res;
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length <= 1) {
    return [nums];
  }
  let arr2 = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    arr2 = add(arr2, nums[i]);
  }
  return arr2;
};
// @lc code=end
console.log(permute([5, 4, 6, 2]));
