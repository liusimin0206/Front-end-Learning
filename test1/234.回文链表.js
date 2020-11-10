/*
 * @Author: your name
 * @Date: 2020-11-10 12:09:25
 * @LastEditTime: 2020-11-10 15:17:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\234.回文链表.js
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let arr = [];
  let node = head;
  while (node != null) {
    arr.push(node.val);
    node = node.next;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end
