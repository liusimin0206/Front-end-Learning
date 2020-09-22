let date = new Date();
date.dateString = {
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  date: date.getDate(),
  hours: date.getHours()
};

let dateString =
  date.dateString.year +
  "-" +
  date.dateString.month +
  "-" +
  date.dateString.date;
let time;
if (date.dateString.hours <= 10) {
  time = `${date.dateString.hours - 1}:57:24`;
} else {
  time = `${date.dateString.hours - 4}:57:24`;
}

export { dateString, time };
