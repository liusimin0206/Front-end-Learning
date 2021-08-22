/*
 * @Author: your name
 * @Date: 2021-08-22 11:17:11
 * @LastEditTime: 2021-08-22 11:31:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Front-end-Learning\test1\interview刷题\fastSort.js
 */
const fenge = arr => {
  const biaozhunzhi = arr[0];
  const xiaoArr = [];
  const daArr = [];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item < biaozhunzhi) {
      xiaoArr.push(item);
    } else {
      daArr.push(item);
    }
  }
  return {
    left: xiaoArr,
    right: daArr,
    mid: [biaozhunzhi]
  };
};
const fastSort = arr => {
  let { left, right, mid } = fenge(arr);
  if (left.length >= 2) {
    left = fastSort(left);
  }
  if (right.length >= 2) {
    right = fastSort(right);
  }
  return [...left, ...mid, ...right];
};

const res = fastSort([5]);
console.log(res);
