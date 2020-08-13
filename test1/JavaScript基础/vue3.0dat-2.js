// var a;
// if (a) {
//   let a = 20;
// } else {
//   let a = 30;
// }
// console.log(a);

let data = [5, 10, 15, 20];
let rs = data
  .map(value => value * 2)
  .filter(value => value >= 20)
  .reduce((ac, cu) => ac + cu);
console.log(rs);
