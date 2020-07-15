function retType(typeX) {
  if (typeof typeX == "object") {
    if (typeX === null) {
      return "null";
    }
    return Object.prototype.toString.call(typeX);
  } else return typeof typeX;
}

Array.prototype.unique = function() {
  var tempObj = {};
  var resArray = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (tempObj[this[index]] != "") {
        tempObj[this[index]] = "";
        resArray.push(this[index]);
      }
    }
  }
  return resArray;
};
var a = [1, 1, 1, 1, 0, 0, 0, 0, undefined, "undefined", null, "null"];
var res = a.unique();
console.log(res);
console.log(res[0] === 0);
