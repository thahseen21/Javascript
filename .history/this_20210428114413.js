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

let calculator = {
  sum() {
    return this.a + this.b;
  },
  read() {
    return (this.a = 2), (this.b = 3);
  },
};
