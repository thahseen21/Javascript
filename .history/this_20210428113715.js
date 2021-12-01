let user = {
  name: "thahseen",
  age: "20",
  sayHi() {
    console.log(user.name);
  },
};

user.sayHi();

let admin = user;

user = null;

admin.sayHi();
