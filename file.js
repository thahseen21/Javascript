var fs = require("fs");
var language = require("./urudu.json");

// let language = fs.readFileSync("arabic.json");

let compressed_data = language.map((item) => {
  let data = Object.values(item);
  return { [data[0]]: data[1] };
});

fs.writeFile(
  "urudu_conv.json",
  JSON.stringify(compressed_data),
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
