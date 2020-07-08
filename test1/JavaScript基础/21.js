Person.prototype.LastName = "bbb";
function Person(name) {
  this.name = name;
}

var person1 = new Person("aaa");
console.log(person1.LastName);
Person.prototype.LastName = "ccc";
console.log(person1.LastName);
