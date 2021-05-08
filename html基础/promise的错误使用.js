/*
 * @Author: liusimin
 * @Date: 2021-04-22 15:04:18
 * @LastEditors: your name
 * @LastEditTime: 2021-04-22 15:07:56
 * @Description: file content
 */
function doSomething() {
    return Promise.resolve(1)
}
function doSomethingElse(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
            console.log(res)
            resolve(3)
        }, 1000)
    })
}
function doThirdThing(newResult) {
    console.log(newResult);
}
function doFourthThing(res) {
    console.log(4, res);
}
doSomething().then(function (result) {
    doSomethingElse(result) // 没有返回 Promise 以及没有必要的嵌套 Promise
        .then(newResult => doThirdThing(newResult));
}).then(() => doFourthThing());