var arr = [1, 2, 3];
var str = "123";
arr.m = "m";
for (let index in arr) {
  console.log(index);
}
for (let index in str) {
  console.log(index);
}
