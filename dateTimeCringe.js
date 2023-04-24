const datetimeZ = "2022-01-11T06:00:00.4121964Z";
const datetimeWithoutZ = "2022-01-10T02:00:47.86";

let val = new Date(datetimeZ);
let val2 = new Date(datetimeWithoutZ);

console.log(datetimeZ,'        ',val);
console.log(datetimeWithoutZ,'        ',val2);