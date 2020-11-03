/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 预处理
  let tempNums = [];
  if (nums1.length < nums2.length) {
    tempNums = nums1;
    nums1 = nums2;
    nums2 = tempNums;
  }
  let len1 = nums1.length;
  let len2 = nums2.length;
  let lenSum = len1 + len2;
  let targetIndex = [];
  if (lenSum % 2 === 0) {
    targetIndex[0] = lenSum / 2 - 1;
    targetIndex[1] = lenSum / 2;
  } else {
    targetIndex[0] = (lenSum + 1) / 2 - 1;
    targetIndex[1] = (lenSum + 1) / 2 - 1;
  }
  let i1 = 0,
    flag = false;
  for (let i2 = 0; i2 < len2; i2++) {
    // 将数字插入
    if (flag) {
      break;
    }
    while (true) {
      if (nums2[i2] < nums1[i1]) {
        nums1.splice(i1, 0, nums2[i2]);
        i1++;
        break;
      }
      i1++;
      if (i1 >= targetIndex[1] + 1) {
        // 不用插入了
        flag = true;
        break;
      }
    }
    if (i1 >= nums1.length) {
      nums1.splice(i1, 0, nums2[i2]);
      i1++;
      break;
    }
  }
  let result = (nums1[targetIndex[0]] + nums1[targetIndex[1]]) / 2;

  return result;
};

// @lc code=end
var findMedianSortedArrays1 = function(nums1, nums2) {
  let num3 = nums1.concat(nums2).sort(function(a, b) {
    return a - b;
  });

  let lenSum = num3.length;
  let targetIndex = [];
  if (lenSum % 2 === 0) {
    targetIndex[0] = lenSum / 2 - 1;
    targetIndex[1] = lenSum / 2;
  } else {
    targetIndex[0] = (lenSum + 1) / 2 - 1;
    targetIndex[1] = (lenSum + 1) / 2 - 1;
  }
  let result = (num3[targetIndex[0]] + num3[targetIndex[1]]) / 2;
  return result;
};
findMedianSortedArrays([1, 3], [2]);
