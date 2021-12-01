let entry = "2021-06-09T03:18:27.020Z";

entry = data?.entryTime.split("T").join(",").split(".").join(",").split(",");

console.log(entry);
