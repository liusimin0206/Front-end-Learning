var a = { name: "a" };
var b = JSON.parse(JSON.stringify(a));
b.name = "b";
console.log(a.name);
