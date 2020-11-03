/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let pingMiantu = [];
  for (let i = 0; i < numRows; i++) {
    pingMiantu[i] = [];
  }
  let col = 0,
    row = 0,
    isdown = true;
  for (let i = 0; i < s.length; i++) {
    pingMiantu[row][col] = s[i];
    if (isdown) {
      row++;
      if (row + 1 >= numRows) {
        isdown = false;
      }
    } else {
      row--;
      col++;
      if (row <= 0) {
        isdown = true;
      }
    }
  }
  let tempArr = [];
  for (let i = 0; i < numRows; i++) {
    tempArr.push(pingMiantu[i].join(""));
  }
  tempArr = tempArr.join("");
  return tempArr;
};
// @lc code=end
console.log(convert("AB", 1));
