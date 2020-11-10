/*
 * @Author: your name
 * @Date: 2020-11-10 15:45:06
 * @LastEditTime: 2020-11-10 16:03:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\101.对称二叉树.js
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) {
    return true;
  }
  return isDuicheng(root.left, root.right);
  function isDuicheng(left, right) {
    if (left == null && right == null) {
      return true;
    }
    if (left == null || right == null) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    return (
      isDuicheng(left.left, right.right) && isDuicheng(left.right, right.left)
    );
  }
};
// @lc code=end
