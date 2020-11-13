/*
 * @Author: your name
 * @Date: 2020-11-12 09:13:41
 * @LastEditTime: 2020-11-12 10:24:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\168.excel表列名称.js
 */
/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let arr = [];
  let res = [];
  let table = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z"
  };
  let weishu;
  for (let i = 0; i < String(n).length + 1; i++) {
    if (i == 0) {
      arr[0] = 1;
    } else {
      arr[i] = arr[i - 1] + Math.pow(26, i);
    }
    if (arr[i] > n) {
      weishu = i;
      break;
    }
  }
  for (let i = weishu - 1; i >= 0; i--) {
    let pow1 = Math.pow(26, i);
    let temp = Math.floor(n / pow1);
    if (i != 0) {
      if (Math.floor(((n - temp * pow1) / pow1) * 26) == 0) {
        temp -= 1;
      }
    }
    n -= temp * pow1;
    res.push(table[temp]);
  }
  return res.join("");
};
// @lc code=end
convertToTitle(1);
