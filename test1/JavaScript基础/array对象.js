var arr = ["a", "b", "c"];
var newArr = [1, 2].map(e => {
  console.log(this == global);
  return this[e];
});
console.log(this == global);
console.log(newArr);
// ['b', 'c']
