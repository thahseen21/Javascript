display = (name) => {
  console.log("name :", name);
  return name;
};

function* generateSequence() {
  yield display("thahseen");
  yield display("mohammed");
  yield "potato";
}

// let obj = generator().next();
// console.log(obj);

// let obj2 = generator.next();
// console.log(obj2);

// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

let generator = generateSequence();

for (let value of generator) {
  console.log(value); // 1, then 2, then 3
}
