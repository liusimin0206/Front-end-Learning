// var obj = Object();
// console.log(typeof null);
// console.log(null instanceof Object);
// // true
// console.log(Object.getOwnPropertyDescriptor(Object, toString));
// console.log(Object.prototype.toString);
// var obj = {};
// Object.defineProperty(obj, "p", {
//   value: 123
// });
// console.log(Object.getOwnPropertyDescriptor(obj, "p"));
// var obj = {};
// for (var item in obj) {
//   console.log(item);
// }
// console.log("toString" in obj); // true
// var obj = new Object();
// Object.preventExtensions(obj);
// var proto = Object.getPrototypeOf(obj);
// proto.t = "hello";
// console.log(obj.t);
// console.log(Object.prototype.t);
// // hello

// var x = 11;
// var f = function(fun) {
//   fun();
// };
// var objFather = {
//   x: 33,
//   obj: {
//     x: 22,
//     say: function() {
//       f(() => {
//         console.log(this.x);
//       });
//       var f2 = () => {
//         console.log(this.x);
//       };
//       f2();
//     }
//   }
// };

// objFather.obj.say();
function a() {
  var b = () => {
    var b = 234;
    console.log(b);
    console.log(this.a);
    console.log(this.glob);
  };
  var a = 123;
  console.log(a);
  b();
}
var glob = 100;
a();
