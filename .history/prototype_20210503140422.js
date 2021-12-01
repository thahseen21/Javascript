let animal = {
  eats: true,

  set soruTime(food) {
    this.stomach.push(food);
  },
};

function hamster(name) {
  this.name = name;
  this.stomach = [];
}

hamster.prototype = animal;

let speedy = new hamster("thahseen");
let lazy = new hamster("Sirishma");

console.log(speedy, lazy);

speedy.soruTime = "chicken biriyani";
lazy.soruTime = "mutton biriyani";

console.log(speedy, lazy);
