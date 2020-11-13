/*
 * @Author: your name
 * @Date: 2020-11-11 15:25:48
 * @LastEditTime: 2020-11-11 16:57:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\155.最小栈.js
 */
/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.val_stack = [];
  this.min_stack = [Number.MAX_VALUE];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.val_stack.push(x);
  this.min_stack.push(Math.min(x, this.min_stack[this.min_stack.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.min_stack.pop();
  this.val_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.val_stack[this.val_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
