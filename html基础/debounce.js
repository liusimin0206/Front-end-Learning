/*
 * @Author: liusimin
 * @Date: 2021-04-12 10:49:13
 * @LastEditors: your name
 * @LastEditTime: 2021-05-26 14:30:00
 * @Description: file content
 */
// 非立即执行版
function debounce(func, wait) {
  let timer
  return function (...args) {

    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
// 节流1
function throttle1(func, wait) {
  let last = 0
  return function (...args) {
    let now = Date.now()
    if (now > last + wait) {
      func.apply(this, args)
      last = now
    }
    else {
      console.log('还未到时间')
    }
  }
}
// 节流2
function throttle2(func, wait) {
  let time = null
  return function (...args) {
    if (time) {
      console.log('定时器还没完成');
    }
    else {
      func.apply(this, args)
      time = setTimeout(() => {
        time = null
      }, wait)
    }
  }
}