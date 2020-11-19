/*
 * @Author: your name
 * @Date: 2020-11-19 17:10:14
 * @LastEditTime: 2020-11-19 17:24:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\226.翻转二叉树.js
 */
/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  function invertNode(node) {
    if (node == null) {
      return node;
    } else {
      invertTree(node.left);
      invertTree(node.right);
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
  }
  invertNode(root);
  return root;
};
// @lc code=end
