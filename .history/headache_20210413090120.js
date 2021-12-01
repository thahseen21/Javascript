//

// function printString(string) {
//   setTimeout(() => {
//     console.log(string);
//   }, Math.floor(Math.random() * 100) + 1);
// }

// function printAll() {
//   printString("A");
//   printString("B");
//   printString("C");
// }

// printAll();

// ------------------------using callback---------------------------

// function printString(string, callback) {
//   setTimeout(() => {
//     console.log(string);
//     callback();
//   }, Math.floor(Math.random() * 100) + 1);
// }

// function printAll() {
//   printString("A", () => {
//     printString("B", () => {
//       printString("C", () => {});
//     });
//   });
// }

// printAll();

// ------------------------using promise---------------------------

// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(string);
//       resolve();
//     }, Math.floor(Math.random() * 100) + 1);
//   });
// }
// // dont forget to add return or else it will print unordered
// // function printAll() {
// //   printString("A")
// //     .then(() => {
// //       return printString("B");
// //     })
// //     .then(() => {
// //       return printString("C");
// //     });
// // }

// // the above code can also be written as
// function printAll() {
//   printString("A")
//     .then(() => printString("B"))
//     .then(() => printString("C"));
// }

// printAll();

// ------------------------using async await---------------------------

function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100) + 1);
}

printAll = async () => {
  await printString("A");
  await printString("B");
  await printString("C");
};
