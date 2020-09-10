// 这种方法会有一个问题：[1,'1']会被当做相同元素，最终输入[1]
let arr = [1, 1, 2, 3, 4, 5, 5, 6];
let arr2 = arr.filter(function(item, index) {
  // indexOf() 方法可返回某个指定的 字符串值 在字符串中首次出现的位置
  return arr.indexOf(item) === index;
});
console.log(arr2);
