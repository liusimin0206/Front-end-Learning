/*
 * @Author: your name
 * @Date: 2020-11-11 10:10:58
 * @LastEditTime: 2020-11-11 10:31:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\141.环形链表.js
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
var hasCycle = function(head) {
  if (!head) {
    return false;
  }
  let node1 = head;
  let node2 = head.next;
  while (true) {
    if (node2 == null || node2.next == null || node2.next.next == null) {
      return false;
    }
    if (node2 === node1) {
      return true;
    }
    node1 = node1.next;
    node2 = node2.next.next;
  }
};
// @lc code=end
