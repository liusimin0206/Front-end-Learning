/*
 * @Author: your name
 * @Date: 2020-11-23 16:45:51
 * @LastEditTime: 2020-11-23 17:26:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\235.二叉搜索树的最近公共祖先.js
 */
/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let res = { node: null, cishu: 0 };
  bianli(root);
  function bianli(node) {
    if (node == null) {
      return false;
    }
    if (node == q) {
      node.hasq = true;
    }
    if (node == p) {
      node.hasp = true;
    }

    bianli(node.left);
    bianli(node.right);
    node.hasq =
      node.hasq ||
      (node.left == null ? false : node.left.hasq) ||
      (node.right == null ? false : node.right.hasq);
    node.hasp =
      node.hasp ||
      (node.left == null ? false : node.left.hasp) ||
      (node.right == null ? false : node.right.hasp);
    if (node.hasq && node.hasp) {
      if (res.cishu == 0) {
        res.node = node;
        res.cishu++;
      }
    }
  }
  return res.node;
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let q = new TreeNode(6);
let p = new TreeNode(4);
let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, p, new TreeNode(5)), q),

  new TreeNode(7)
);
lowestCommonAncestor(root, p, q);
