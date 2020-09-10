var jiantou = () => {
  console.log(this);
};
var fn = function() {
  console.log(this);
};
var obj = {
  name: "obj",
  sayname: function() {
    console.log(this.name);

    var jiantou = () => {
      console.log(this);
    };
    return jiantou;
  }
};
jiantou.call(obj);
fn.call(obj);
var objJiantou = obj.sayname;
objJiantou()();
