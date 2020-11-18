/*
 * @Author: your name
 * @Date: 2020-11-18 14:18:39
 * @LastEditTime: 2020-11-18 14:51:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\108.将有序数组转换为二叉搜索树.js
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function insertLeftandright(arr) {
    if (arr.length == 0) {
      return null;
    }
    if (arr.length == 1) {
      return new TreeNode(arr[0]);
    }
    let mid = Math.floor((arr.length - 1) / 2);
    let temp = new TreeNode(arr[mid]);

    temp.left = insertLeftandright(arr.slice(0, mid));
    temp.right = insertLeftandright(arr.slice(mid + 1, arr.length));
    return temp;
  }
  return insertLeftandright(nums);
};
// @lc code=end
sortedArrayToBST([-10, -3, 0, 5, 9]);
