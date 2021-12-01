let hamster = {
  stomach: [],
  eat() {
    this.stomach = ["apple"];
  },
};

let speedy = {
  __proto__: hamster,
};

let potato = {
  __proto__: hamster,
};

speedy.eat();

console.log("speedy", speedy);
