Father.prototype.Lastname = "liu";
function Father() {}

function Son() {}

var inhert = (function() {
  var F = function() {};
  return function(target, orgin) {
    F.prototype = orgin.prototype;
    target.prototype = new F();
  };
})();

inhert(Son, Father);
var son = new Son();
var father = new Father();

console.log(son.Lastname);
console.log(father.Lastname);
