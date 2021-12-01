// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     process.stdout.write(input + ".\n");       // Writing output to STDOUT
// }

a = [2, 4, 3];
k = 7;

a.map((item) => {
  console.log(`\n ${item} : `);
  for (let i = 0; i <= k; i++) {
    if ((item ^ i) > item) {
      console.log(i, item ^ i);
    }
  }
});
