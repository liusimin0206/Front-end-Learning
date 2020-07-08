Person.prototype = {
  name: "laozhang",
  that: this,
  sayName: function() {
    console.log(this.that);
  }
};
function Person() {
  this.name = "laoliu";
  this.that1 = this;
  this.sayName1 = function() {
    console.log(this.that1);
  };
}

var a = {
  name: "a",
  that: this,
  sayName: function() {
    console.log(this);
  }
};

var person1 = new Person();
// ??
person1.sayName();
person1.sayName1();
a.sayName();
// ??
console.log((123).toString());
