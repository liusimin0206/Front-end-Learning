/*
 * @Author: liusimin
 * @Date: 2021-04-22 14:15:45
 * @LastEditors: your name
 * @LastEditTime: 2021-04-22 14:43:49
 * @Description: file content
 */
function myPromiseAll(promiseArray) {
  let resArray = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArray.length; i++) {
      promiseArray[i].then((res) => {
        resArray[i] = res
        count++
        if (count === promiseArray.length) {
          resolve(resArray)
        }
      }).catch(
        () => {
          reject(`第${i}个promise失败了`)
        }
      )
    }
  })
}
let p1 = new Promise((resovle, reject) => {
  setTimeout(() => {
    console.log(1);
    reject(1)
  }, 1000)
})
let p2 = new Promise((resovle, reject) => {
  setTimeout(() => {
    console.log(2);
    resovle(2)
  }, 2000)
})
let p3 = new Promise((resovle, reject) => {
  setTimeout(() => {
    console.log(3);
    resovle(3)
  }, 3000)
})
myPromiseAll([p1, p2, p3])
  .then((res) => {
    setTimeout(() => {
      console.log(4);
      console.log(res);
    }, 1000)
  }
  )