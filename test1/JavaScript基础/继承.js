function Father(a) {
  this.myname = a;
}
Father.prototype.sayName = function() {
  console.log("222");
};
function Son(a) {
  Father.call(this, a);
}
var son = new Son("111");
