let a = 5,
  b = 10;

hereWeGo: if (a > b) {
  console.log("a is bigger");
} else if (a === 5) {
  a = 20;
  continue hereWeGo;
} else {
  console.log("cool");
}

console.log("nice to meet you");
