"use strict";

function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
}

var arr = [1, 2, [5, 6, 7], 3, [5, 6, 7], 4];
console.log(simpleNormalizeChildren(arr));