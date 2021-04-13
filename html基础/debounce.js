/*
 * @Author: liusimin
 * @Date: 2021-04-12 10:49:13
 * @LastEditors: your name
 * @LastEditTime: 2021-04-12 10:49:39
 * @Description: file content
 */
// 非立即执行版
function debounce(func, wait) {
    let timer;
    return function(...args) {
      let context = this; // 注意 this 指向
         
      if (timer) clearTimeout(timer);
 
      timer = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
}