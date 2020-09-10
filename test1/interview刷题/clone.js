var a = { name: "j", age: 20 };
function myClone(obj) {
  var newObj = {};
  if (typeof obj != "object") {
    newObj = obj;
  } else {
    for (var attr in obj) {
      newObj[attr] = myClone(obj[attr]);
    }
  }
  return newObj;
}
console.log(myClone(a));
