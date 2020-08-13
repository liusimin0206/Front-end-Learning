var str = "156186132";
// 方法一
// var yushu = str.length % 3;
// var str1 = str.slice(0, yushu);
// var str2 = str.slice(yushu);
// var newStr = "";
// if (str2 != "") {
//   var reg = /\d\d\d/g;
//   newStr = str2.match(reg).join(",");
//   if (str != "") newStr = str1 + "," + newStr;
// } else {
//   newStr = str1;
// }

// 方法二
var reg = /(?=(\B)(\d{3}){1,}$)/g;
var newStr = str.replace(reg, ",");
console.log(newStr);
