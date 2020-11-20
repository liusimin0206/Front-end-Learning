/*
 * @Author: your name
 * @Date: 2020-11-20 09:22:22
 * @LastEditTime: 2020-11-20 10:38:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\147.对链表进行插入排序.js
 */
/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let newhead = new ListNode(Number.MIN_VALUE);
  newhead.next = head;
  let nodedin = newhead;

  while (nodedin.next != null) {
    let tempNode = nodedin.next;
    nodedin.next = nodedin.next.next;
    let nodedong = newhead;
    while (true) {
      if (nodedong == nodedin || nodedong.next.val >= tempNode.val) {
        if (nodedong == nodedin) {
          nodedin = tempNode;
        }
        let temp = nodedong.next;
        nodedong.next = tempNode;
        tempNode.next = temp;
        break;
      }
      nodedong = nodedong.next;
    }
  }
  return newhead.next;
};
// @lc code=end
