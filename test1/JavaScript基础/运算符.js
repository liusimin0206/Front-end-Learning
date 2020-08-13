// var obj = {
//   valueOf: function() {
//     return 1;
//   }
// };
// console.log(obj + 2); // 3
// var a = "hello";
// a++;
// console.log(a);
// function retType(typeX) {
//   if (typeof typeX == "object") {
//     if (typeX === null) {
//       return "null";
//     }
//     return Object.prototype.toString.call(typeX);
//   } else return typeof typeX;
// }
// var x = [];
// console.log(x.valueOf());
// console.log(x.valueOf().toString());
// x = Number(x);
// console.log(retType(x));
// console.log(retType([]));
// x = new Number(0);
// console.log(retType(x));
console.log(true.valueOf().toString()); // false
