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

let a = 10;
let calculator = {
  sum() {
    return this.a + this.b;
  },
  read() {
    (this.a = 2), (this.b = 3);
  },
};

calculator.read();
console.log(calculator.sum());
