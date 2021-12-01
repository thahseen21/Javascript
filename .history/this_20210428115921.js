// let user = {
//   name: "thahseen",
//   age: "20",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi();

// let admin = user;

// user = null;
// console.log("user", user);
// admin.sayHi();

// let a = 10;
// let calculator = {
//   sum() {
//     return a + this.b;
//   },
//   read() {
//     (this.a = 2), (this.b = 3);
//   },
// };

// calculator.read();
// console.log(calculator.sum());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     console.log(this.step);
//   },
// };

// ladder.up().up().showStep(); // 1

function User(name) {
  this.name = name;
}

let husband = new User("thahseen");
let wife = new User("sirishma");

console.log(husband, wife);
