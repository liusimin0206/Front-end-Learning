// let { log } = console;

// function add([x = 4, y = 4]) {
//   return x + y;
// }
// function move({ x = 0, y = 0 }) {
//   return [x, y];
// }
// let [{ x, y } = { x: 0, y: 0 }] = [{}];
// move({ x: 3, y: 8 });
// log(add([1, 2]));
const map = new Map();
map.set("first", "hello");
map.set("second", "world");

for (let [, v] of map) {
  console.log("k" + " is " + v);
}
