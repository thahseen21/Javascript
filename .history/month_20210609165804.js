let entry = "2021-06-09T03:18:27.020Z";
let months = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

entry = entry.split("T").join(",").split(".").join(",").split(",");

let date = entry[0].split("-");

date[1] = months.filter((item, index) => index === parseInt(date[1]))[0];
date.reverse();

date = `${date[0]} ${date[1]},${date[2]}`;

console.log(date, entry);
//`${item[0]} ${item[1]},${item[2]}`
