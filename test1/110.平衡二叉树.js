/*
 * @Author: your name
 * @Date: 2020-11-18 14:53:34
 * @LastEditTime: 2020-11-19 11:33:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\110.平衡二叉树.js
 */
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root == null) {
    return true;
  }
  let res = true;
  function nodeHeight(node) {
    if (res == false) return 0;
    let leftH, rightH;
    if (node.left == null) {
      leftH = 0;
    } else {
      leftH = nodeHeight(node.left);
      if (res == false) return 0;
    }
    if (node.right == null) {
      rightH = 0;
    } else {
      rightH = nodeHeight(node.right);
      if (res == false) return 0;
    }
    if (Math.abs(leftH - rightH) > 1) {
      res = false;
    }
    return Math.max(leftH, rightH) + 1;
  }
  nodeHeight(root);
  return res;
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(3, new TreeNode(4), new TreeNode(4)),
    new TreeNode(3)
  ),

  new TreeNode(2)
);
console.log(isBalanced(root));
