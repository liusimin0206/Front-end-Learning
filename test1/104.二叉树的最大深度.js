/*
 * @Author: your name
 * @Date: 2020-11-18 14:58:39
 * @LastEditTime: 2020-11-18 14:59:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \test1\104.二叉树的最大深度.js
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }
  root.censhu = 1;
  let max = 0;
  function bianli(node) {
    if (node == null) {
      return;
    } else {
      if (node.left != null) {
        node.left.censhu = node.censhu + 1;
        bianli(node.left);
      }
      if (node.right != null) {
        node.right.censhu = node.censhu + 1;
        bianli(node.right);
      }
    }
    if (max < node.censhu) {
      max = node.censhu;
    }
  }
  bianli(root);
  return max;
};
// @lc code=end
