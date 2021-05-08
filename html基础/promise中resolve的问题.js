/*
 * @Author: liusimin
 * @Date: 2021-04-22 16:48:19
 * @LastEditors: your name
 * @LastEditTime: 2021-04-23 17:06:34
 * @Description: file content
 */
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
  resolve('p1')
  },1000)
});
console.log(p1);
// const p2 = new Promise(function (resolve, reject) {
//   resolve(p1);
//   // p1.then().then(resolve,reject)
// })
const p2 = Promise.resolve(p1);

const p3 = new Promise(function (resolve, reject) {
  p1.then(resolve,reject)
})
console.log(p2)
// const p2 = new Promise(function (resolve, reject) {
//     p1.then(resolve,resolve)
// })
p2.then(() => {
  console.log(2);
})
p3.then(() => {
  console.log(4);
})
p1.then(() => {
  console.log(1);
  console.log(p2)
  console.log(p3)
}).then(() => {
  console.log(1);
  console.log(p2)
}).then(() => {
  console.log(1);
  console.log(p2)
})
Promise.resolve().then(() => console.log(3))