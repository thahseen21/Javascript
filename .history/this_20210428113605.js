let user = {
  name: "thahseen",
  age: "20",
  sayHi() {
    console.log(user.name);
  },
};

// user.sayHi();
this = user;
this.sayHi();
