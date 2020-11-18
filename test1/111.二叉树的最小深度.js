/*
 * @Author: your name
 * @Date: 2020-11-18 15:01:09
 * @LastEditTime: 2020-11-18 17:25:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\111.二叉树的最小深度.js
 */
/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  root.censhu = 1;
  let queue = [root];
  while (queue.length != 0) {
    let temp = queue.shift();
    if (!temp.left && !temp.right) {
      return temp.censhu;
    }
    if (temp.left) {
      temp.left.censhu = temp.censhu + 1;
      queue.push(temp.left);
    }
    if (temp.right) {
      temp.right.censhu = temp.censhu + 1;
      queue.push(temp.right);
    }
  }
};
// @lc code=end
