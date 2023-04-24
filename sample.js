var fs = require("fs");

let fromDate = new Date("1980-01-01");
// let fromDate = new Date("2022-01-01");
let toDate = new Date();
var daysOfYear = [];

let data = "";

for (var d = fromDate; d <= toDate; d.setDate(d.getDate() + 1)) {
  daysOfYear.push(d);
  data =
    data +
    `insert into timelog(userid,transactionDate) 
        values
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 9:00'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 10:00'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 10:10'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 11:00'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 11:10'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 12:00'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 12:10'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 13:00'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 13:10'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 14:00'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 14:10'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 15:00'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 15:10'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 16:00'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 16:10'),
    (1,'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 17:00');`;
}

fs.writeFile("TimeLogdata.sql", data, function (err) {
  if (err) throw err;
  console.log("Saved!");
});

console.log(daysOfYear.length,daysOfYear.length * 16);
// console.log(data)
