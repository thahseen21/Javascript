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

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
