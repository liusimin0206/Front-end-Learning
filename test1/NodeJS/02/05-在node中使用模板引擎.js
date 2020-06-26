let template = require("art-template");
let ret = template.render("hello {{ name }}", {
  name: "John"
});
console.log(ret);
