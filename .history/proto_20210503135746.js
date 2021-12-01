let hamster = {
  set eat(food) {
    console.log(this);
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: ["pineapple"],
  __proto__: hamster,
};

let potato = {
  stomach: [],
  __proto__: hamster,
};

speedy.eat = "banana";
potato.eat = "apple";

console.log("speedy", speedy.stomach);
console.log("potato", potato.stomach);
