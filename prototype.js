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

let hamster1 = new hamster("speedy");
let hamster2 = new hamster("lazy");

console.log(hamster1, hamster2);

hamster1.soruTime = "chicken biriyani";
hamster2.soruTime = "mutton biriyani";

console.log(hamster1, hamster2);
