let animal = {
  eats: true,
};

function hamster(name) {
  this.name = name;
  this.stomach = [];
}

hamster.prototype = animal;

let speedy = new hamster("thahseen");

console.log(speedy);
