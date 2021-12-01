let hamster = {
  set eat(food) {
    console.log(this);
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let potato = {
  stomach: [],
  __proto__: hamster,
};

speedy.eat = "banana";

console.log("speedy", speedy.stomach);
console.log("potato", potato.stomach);

potato.eat = "apple";

console.log("speedy", speedy.stomach);
console.log("potato", potato.stomach);
