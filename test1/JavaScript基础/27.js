var a = ["a", "b", "c", "d", "e"];
var b = [];
var c = null;
for (var item in a) {
  b[item] = a[item];
  console.log(item);
  console.log(a[item]);
}
console.log(b);
console.log(c === "null");
