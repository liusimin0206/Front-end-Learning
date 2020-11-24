/*
 * @Author: your name
 * @Date: 2020-11-19 15:20:22
 * @LastEditTime: 2020-11-23 14:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\206.反转链表.js
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let p = reverseList(head.next);
  if (head.next.next == null) {
    head.next.next = head;
    head.next = null;
  }
  return p;
};
// @lc code=end
