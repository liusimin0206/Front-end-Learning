/*
 * @Author: your name
 * @Date: 2020-11-18 13:57:28
 * @LastEditTime: 2020-11-18 14:18:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\107.二叉树的层次遍历-ii.js
 */
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  root.censhu = 0;
  let queue = [root];
  let res = [];
  while (queue.length != 0) {
    let temp = queue.shift();
    if (res[temp.censhu]) {
      res[temp.censhu].push(temp.val);
    } else {
      res[temp.censhu] = [temp.val];
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
  return res.reverse();
};
// @lc code=end
console.log(levelOrderBottom());
