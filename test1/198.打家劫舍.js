/*
 * @Author: your name
 * @Date: 2020-11-10 16:20:08
 * @LastEditTime: 2020-11-10 18:14:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\198.打家劫舍.js
 */
/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let res = [];
  res[-1] = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      res[i] = nums[0];
    } else if (i == 1) {
      res[i] = Math.max(nums[0], nums[1]);
    } else {
      res[i] = Math.max(res[i - 1], res[i - 2] + nums[i]);
    }
  }
  return res[nums.length - 1];
};
// @lc code=end
console.log(
  rob([
    226,
    174,
    214,
    16,
    218,
    48,
    153,
    131,
    128,
    17,
    157,
    142,
    88,
    43,
    37,
    157,
    43,
    221,
    191,
    68,
    206,
    23,
    225,
    82,
    54,
    118,
    111,
    46,
    80,
    49,
    245,
    63,
    25,
    194,
    72,
    80,
    143,
    55,
    209,
    18,
    55,
    122,
    65,
    66,
    177,
    101,
    63,
    201,
    172,
    130,
    103,
    225,
    142,
    46,
    86,
    185,
    62,
    138,
    212,
    192,
    125,
    77,
    223,
    188,
    99,
    228,
    90,
    25,
    193,
    211,
    84,
    239,
    119,
    234,
    85,
    83,
    123,
    120,
    131,
    203,
    219,
    10,
    82,
    35,
    120,
    180,
    249,
    106,
    37,
    169,
    225,
    54,
    103,
    55,
    166,
    124
  ])
);
