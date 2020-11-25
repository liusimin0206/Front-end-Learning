/*
 * @Author: your name
 * @Date: 2020-11-25 16:12:28
 * @LastEditTime: 2020-11-25 16:48:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\589.n叉树的前序遍历.js
 */
/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = [];
  function bianli(root) {
    if (root == null) {
      return;
    }
    res.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
      bianli(root.children[i]);
    }
  }
  bianli(root);
  return res;
};
// @lc code=end
