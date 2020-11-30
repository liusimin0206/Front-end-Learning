/*
 * @Author: liusimin
 * @Date: 2020-11-30 10:07:30
 * @LastEditTime: 2020-11-30 11:13:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\767.重构字符串.js
 */
/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
function exchange(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  const len = S.length;
  let res = [];
  if (len == 0) {
    return "";
  }
  let obj = {};
  for (let i = 0; i < S.length; i++) {
    const item = S[i];
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  let max = 0;
  let maxIndex;
  let arrkey = Object.keys(obj);
  for (let i = 0; i < arrkey.length; i++) {
    const key = arrkey[i];

    if (max < obj[key]) {
      max = obj[key];
      maxIndex = i;
    }
  }
  if (max > (len + 1) >> 1) {
    return "";
  }
  exchange(arrkey, 0, maxIndex);
  let even = 0,
    odd = 1;
  for (let i = 0; i < arrkey.length; i++) {
    const key = arrkey[i];

    while (obj[key] > 0 && even < len) {
      res[even] = key;
      obj[key]--;
      even += 2;
    }
    while (obj[key] > 0) {
      res[odd] = key;
      obj[key]--;
      odd += 2;
    }
  }
  return res.join("");
};
// @lc code=end
console.log(reorganizeString("aaab"));
