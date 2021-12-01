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
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);