// const test = {
//   prop: 42,
//   func: function () {
//     prop = 32;
//     return [this.prop, prop];
//   },
// };

// console.log(test.func());
// console.log(this.test);

function greeting(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  console.log("in processUserInput", callback);
  var name = "thahseen";
  callback(name);
}

processUserInput(greeting);
