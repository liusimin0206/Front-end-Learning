// var str = { x: "123" };
// console.log(Object.getOwnPropertyDescriptor(str, "x"));
var MyObject = function() {
  this.len = 0;
};
MyObject.prototype = new MyObject();
var obj1 = new MyObject();
