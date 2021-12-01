const test = {
//   prop: 42,
  func: function () {
    prop = 32;
    return prop;
  },
};

console.log(test.func());
