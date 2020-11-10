/*
 * @Author: your name
 * @Date: 2020-11-10 09:00:45
 * @LastEditTime: 2020-11-10 09:25:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\83.删除排序链表中的重复元素.js
 */
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  let zhizheng = head;
  while (zhizheng !== null) {
    if (zhizheng.next == null) {
      break;
    }
    if (zhizheng.val === zhizheng.next.val) {
      zhizheng.next = zhizheng.next.next;
    } else zhizheng = zhizheng.next;
  }
  return head;
};
// @lc code=end
