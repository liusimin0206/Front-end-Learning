/*
 * @Author: your name
 * @Date: 2020-11-09 14:26:14
 * @LastEditTime: 2020-11-09 14:36:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\快速排序.js
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let jizhunIndex = Math.floor(Math.random() * arr.length);
  let jizhun = arr.splice(jizhunIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i in arr) {
    if (arr[i] < jizhun) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([jizhun], quickSort(right));
}
console.log(quickSort([5, 2, 7, 4, 8, 1, 7, 3]));
