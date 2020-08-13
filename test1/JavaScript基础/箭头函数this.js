var x = 11;
var f = function(fun) {
  fun();
};
var objFather = {
  x: 33,
  obj: {
    x: 22,
    say: function() {
      console.log(this);
      f(() => {
        console.log(this.x);
      });
      var f2 = () => {
        console.log(this.x);
      };
      f2();
    }
  }
};

objFather.obj.say();

// babel编译后
var x = 11;

var f = function f(fun) {
  fun();
};

var objFather = {
  x: 33,
  obj: {
    x: 22,
    say: function say() {
      var _this = this;

      f(function() {
        console.log(_this.x);
      });

      var f2 = function f2() {
        console.log(_this.x);
      };

      f2();
    }
  }
};
objFather.obj.say();
