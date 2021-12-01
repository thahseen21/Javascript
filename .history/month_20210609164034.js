let entry = "2021-06-09T03:18:27.020Z";

entry = entry.split("T").join(",").split(".").join(",").split(",");

entry = entry[0].split("-");

console.log(entry);
