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

entry[1] = entry.reverse();

console.log(entry);
