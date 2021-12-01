// let a = 5,
//   b = 10;

// hereWeGo: if (a > b) {
//   console.log("a is bigger");
// } else if (a === 5) {
//   a = 20;
//   continue hereWeGo;
// } else {
//   console.log("cool");
// }

// console.log("nice to meet you");
let n = 10;
// nextPrime: for (let i = 2; i < n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }

//   console.log(i); // a prime
// }
for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
    }
  }

  console.log(i); // a prime
}
