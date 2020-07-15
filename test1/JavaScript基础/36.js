// 查找字符串中第一个不重复的字母
function firstUniqueLetter(str) {
  var isNotUnique = {};
  for (var i = 0; i < str.length; i++) {
    if (isNotUnique[i]) {
      continue;
    }
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        isNotUnique[i] = "repeat";
        isNotUnique[j] = "repeat";
      }
    }
    if (isNotUnique[i] !== "repeat") {
      return str[i];
    }
  }
}
var newStr =
  "qweqrwer1werqwqweaqweqwrewrqreqweqrwerqwrqwrqwrqwerwberqrwerwerwerwerwerwer";
console.log(firstUniqueLetter(newStr));
