function sports() {
}

// Every function has .protype property
sports.prototype.language = "love";
sports.prototype.isBeautiful = true;

const football = new sports();

// Check the prototype of football
console.log(Object.getPrototypeOf(football));

// Access one of the prototypes
console.log(football.language)