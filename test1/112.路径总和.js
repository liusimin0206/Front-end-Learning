/*
 * @Author: your name
 * @Date: 2020-11-19 11:36:37
 * @LastEditTime: 2020-11-19 11:58:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\112.路径总和.js
 */
/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let res = false;
  if (root == null) {
    return false;
  }
  root.lujing = root.val;
  function bianli(node) {
    if (node == null) {
      return;
    } else {
      if (node.left != null) {
        node.left.lujing = node.lujing + node.left.val;
        bianli(node.left);
      }
      if (node.right != null) {
        node.right.lujing = node.lujing + node.right.val;
        bianli(node.right);
      }
      if (node.left == null && node.right == null) {
        if (node.lujing == sum) {
          res = true;
        }
      }
    }
  }
  bianli(root);
  return res;
};
// @lc code=end
