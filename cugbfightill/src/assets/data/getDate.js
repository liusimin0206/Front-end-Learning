function bu2Wei(str) {
  str = String(str);
  while (str.length < 2) {
    str = "0" + str;
  }
  return str;
}
function date2Str(date) {
  return [
    date.getFullYear(),
    bu2Wei(date.getMonth() + 1),
    bu2Wei(date.getDate())
  ].join("-");
}

export { date2Str };
