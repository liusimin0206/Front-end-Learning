// function f() {
//   console.log("I am outside!");
// }

// (function() {
//   if (false) {
//     // 重复声明一次函数f
//     function f() {
//       console.log("I am inside!");
//     }
//   }
//   console.log(f);
// })();

// if (true) {
//   let x = 1;
// }
// var b = 0;
// console.log(b);
// let a;
// if (true) {
//   const MAX = 5;
// }

// console.log(typeof MAX);
function f() {
  console.log("aaa");
}
let [x = f()] = [];
console.log(x);
