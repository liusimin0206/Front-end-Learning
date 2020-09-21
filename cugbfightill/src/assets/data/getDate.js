let date = new Date();
date.dateString = {
  year: date.getFullYear(),
  Month: date.getMonth() + 1,
  date: date.getDate()
};

let dateString =
  date.dateString.year +
  "-" +
  date.dateString.Month +
  "-" +
  date.dateString.date;
export { dateString };
