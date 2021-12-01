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

entry = entry[0].split("-");

entry[1] = months.filter((item, index) => index === parseInt(entry[1]))[0];
entry.reverse();

entry = `[${entry[0]} ${entry[1]},${entry[2]}]`;

console.log(entry);
//`${item[0]} ${item[1]},${item[2]}`
