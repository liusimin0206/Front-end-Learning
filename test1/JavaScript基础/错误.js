function UserError(message) {
  this.message = message || "默认信息";
  this.name = "UserError";
}
UserError.prototype = new Error();
console.log(UserError.prototype.constructor);
UserError.prototype.constructor = UserError;

for (var t = "11455990_400", i = "", s = 0; s < t.length; s++) {
  i += String.fromCharCode(t.charCodeAt(s) + t.length + s);
}
console.log(i);
