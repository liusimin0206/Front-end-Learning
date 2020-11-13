/*
 * @Author: your name
 * @Date: 2020-11-13 09:26:14
 * @LastEditTime: 2020-11-13 09:55:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\328.奇偶链表.js
 */
/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let odd = head;
  let even = head.next,
    even1 = head.next;
  while (even != null && even.next != null) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = even1;
  return head;
};
// @lc code=end
