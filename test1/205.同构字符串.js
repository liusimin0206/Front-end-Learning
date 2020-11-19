/*
 * @Author: your name
 * @Date: 2020-11-19 15:13:54
 * @LastEditTime: 2020-11-19 15:20:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\205.同构字符串.js
 */
/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
function peidui(s, t) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = t[i];
    } else {
      if (obj[s[i]] != t[i]) {
        return false;
      }
    }
  }
  return true;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  return peidui(s, t) && peidui(t, s);
};
// @lc code=end
isIsomorphic("egg", "add");
