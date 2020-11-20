/*
 * @Author: your name
 * @Date: 2020-11-20 11:25:37
 * @LastEditTime: 2020-11-20 11:40:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\345.反转字符串中的元音字母.js
 */
/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let reg = new RegExp("a|e|i|o|u", "ig");
  let yuanyinArr = s.match(reg);
  if (yuanyinArr == null) {
    return s;
  }
  let feiyuanyinArr = s.split(reg);
  let res = feiyuanyinArr[0];
  yuanyinArr.reverse();
  for (let i = 0; i < feiyuanyinArr.length - 1; i++) {
    res += yuanyinArr[i];
    res += feiyuanyinArr[i + 1];
  }
  return res;
};
// @lc code=end
console.log(reverseVowels("hhh"));
