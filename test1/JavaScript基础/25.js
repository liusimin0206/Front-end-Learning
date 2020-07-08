console.log(parseInt("1a") == 1);
var a = {
  name: "aaa",
  sayName: function() {
    console.log(this.name);
  }
};
var fun = a.sayName;
a.sayName();
fun();
