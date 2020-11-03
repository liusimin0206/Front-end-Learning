/*
 * @Author: your name
 * @Date: 2020-11-02 11:37:19
 * @LastEditTime: 2020-11-02 12:08:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\13.罗马数字转整数.js
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let res = 0;
  const table = [
    ["CM", 900],
    ["CD", 400],
    ["XC", 90],
    ["XL", 40],
    ["IX", 9],
    ["IV", 4],
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1]
  ];
  table.forEach(item => {
    let key = item[0];
    let tempArr = s.split(key);
    res += (tempArr.length - 1) * item[1];
    s = tempArr.join(",");
  });
  return res;
};
// @lc code=end
console.log(romanToInt("MCMXCIV"));
