// let template = `
// <ul>
//   <% for(let i=0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>
// `;

// function compile(template) {
//   const evalExpr = /<%=(.+?)%>/g;
//   const expr = /<%([\s\S]+?)%>/g;

//   template = template
//     .replace(evalExpr, "`); \n  echo( $1 ); \n  echo(`")
//     .replace(expr, "`); \n $1 \n  echo(`");

//   template = "echo(`" + template + "`);";

//   let script = `(function parse(data){
//       let output = "";

//       function echo(html){
//         output += html;
//       }

//       ${template}

//       return output;
//     })`;

//   return script;
// }

// let sender = '<script>alert("abc")</script>';
// let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

// function SaferHTML(templateData) {
//   console.log(templateData);
//   console.log(arguments);
//   let s = templateData[0];
//   for (let i = 1; i < arguments.length; i++) {
//     let arg = String(arguments[i]);

//     // Escape special characters in the substitution.
//     s += arg
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");

//     // Don't escape special characters in the template.
//     s += templateData[i];
//   }
//   return s;
// }
// let ccc = handleStr`bad escape sequence: \unicode`;
// function handleStr(strs) {
//   return strs.raw[0];
// }
// console.log(ccc);

// Person.prototype = {
//   name: "小a"
// };
// function Person() {}
// Person.log = console.log;
// var aaa = new Person();
// console.log(aaa.__proto__.name);
// console.log(Person);

var str1 = "\n";
var reg = /\n/g;
console.log(reg.test(str1));
var str2 = `
`;
console.log("..." + str1 + "...");
console.log("..." + str2 + "...");
console.log(str1 === str2);
str2 = str2.replace(reg, "aaaa");
console.log("..." + str2 + "...");
