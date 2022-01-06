/*
 * @Author: your name
 * @Date: 2021-08-22 15:47:13
 * @LastEditTime: 2021-08-22 17:11:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Front-end-Learning\test1\interview刷题\fastSort1.js
 */

const fenge = (arr, start, end) => {
  const biaozhunzhi = arr[start];
  let j = start + 1;
  for (let i = start + 1; i <= end; i++) {
    const item = arr[i];
    if (item < biaozhunzhi) {
      exchange(arr, i, j);
      j++;
    }
  }
  exchange(arr, j - 1, start);
  return j - 1;
};
const sortArray = (arr, start = 0, end = arr.length - 1) => {
  let biaozhunweizhi = fenge(arr, start, end);
  if (biaozhunweizhi - start >= 2) {
    sortArray(arr, start, biaozhunweizhi - 1);
  }
  if (end - biaozhunweizhi >= 2) {
    sortArray(arr, biaozhunweizhi + 1, end);
  }
  return arr;
};
const exchange = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const res = sortArray([5, 1, 1, 2, 0, 0]);
res.forEach(value => {
  console.log(value);
});
