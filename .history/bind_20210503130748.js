let user = {
  firstName: "John",
  sayHi() {
    console.log("this", this);
    console.log(`Hello, ${this.firstName}!`);
  },
};

setTimeout(user.sayHi, 1);

console.log(user);
