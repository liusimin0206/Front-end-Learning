function fun1(fun) {
  var a = 1;
  fun();
}
function fun() {
  console.log(a);
}
fun1(fun);
