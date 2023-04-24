var fs = require("fs");

let name = "potato";
var designation = ["Principal", "Teacher", "non-teacher", "clerk"];

let data = "";

for (var d = 1; d <= 100000; d++) {
  data =
    data +
    `insert into Employee(Name,Designation) 
        values ('${name}${d}','${designation[d % 4]}')
        `;
}

fs.writeFile("NameGenerator.sql", data, function (err) {
  if (err) throw err;
  console.log("Saved!");
});
