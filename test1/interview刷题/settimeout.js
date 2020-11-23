/*
 * @Author: your name
 * @Date: 2020-11-23 10:13:53
 * @LastEditTime: 2020-11-23 10:13:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Front-end-Learning\test1\interview刷题\settimeout.js
 */
setImmediate(function() {
  setImmediate(function A() {
    console.log(1);
    setImmediate(function B() {
      console.log(2);
    });
  });

  setTimeout(function timeout() {
    console.log("TIMEOUT FIRED");
  }, 0);
});
