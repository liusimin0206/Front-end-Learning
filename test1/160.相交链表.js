/*
 * @Author: your name
 * @Date: 2020-11-11 17:05:12
 * @LastEditTime: 2020-11-11 17:56:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\160.相交链表.js
 */
/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) {
    return null;
  }
  if (headA == headB) {
    return headB;
  }
  let nodeA = headA,
    nodeB = headB;
  let flag = 0;
  while (flag != 2) {
    if (nodeA == nodeB) {
      return nodeA;
    }
    if (nodeA.next == null) {
      nodeA = headB;
      flag++;
    } else {
      nodeA = nodeA.next;
    }
    if (nodeB.next == null) {
      nodeB = headA;
    } else {
      nodeB = nodeB.next;
    }
  }
  console.log(111);
  return null;
};
// @lc code=end
