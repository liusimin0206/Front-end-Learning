var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return "";
  }
  var res = {
    rLen: 0,
    start: 0,
    end: -1,
    str: ""
  };
  for (let i = 0; ; i++) {
    var tempLetter = strs[0][i];
    var isSame = true;
    for (let j = 0; j < strs.length; j++) {
      if (
        strs[j][i] != tempLetter ||
        strs[j][i] == undefined ||
        tempLetter == undefined
      ) {
        isSame = false;
        break;
      }
    }
    if (isSame) {
      res.end = i;
    } else {
      break;
    }
  }
  res.str = strs[0].slice(0, res.end + 1);
  return res.str;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
