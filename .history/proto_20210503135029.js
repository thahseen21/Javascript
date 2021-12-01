let hamster = {
  stomach: [],
  set eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let potato = {
  __proto__: hamster,
};

speedy.eat = "banana";

console.log("speedy", speedy.stomach);
console.log("potato", potato.stomach);

potato.eat('adsf');

console.log("speedy", speedy.stomach);
console.log("potato", potato.stomach);
