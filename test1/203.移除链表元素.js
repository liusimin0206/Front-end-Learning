/*
 * @Author: your name
 * @Date: 2020-11-19 14:45:44
 * @LastEditTime: 2020-11-19 14:54:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\203.移除链表元素.js
 */
/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let tempHead = new ListNode();
  tempHead.next = head;
  let node = tempHead;
  while (node.next != null) {
    if (node.next.val == val) {
      node.next = node.next.next;
      continue;
    }
    node = node.next;
  }
  return tempHead.next;
};
// @lc code=end
