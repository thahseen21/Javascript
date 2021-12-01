// const test = {
//   prop: 42,
//   func: function () {
//     prop = 32;
//     return [this.prop, prop];
//   },
// };

// console.log(test.func());
// console.log(this.test);

var obj = { a: "Custom" };

// We declare a variable and the variable is assigned to the global window as its property.
var a = "Global";

function whatsThis() {
  console.log(this.a);
  console.log(a);
  return this.a; // The value of this is dependent on how the function is called
}

whatsThis(); // 'Global' as this in the function isn't set, so it defaults to the global/window object
whatsThis(obj); // 'Custom' as this in the function is set to obj
whatsThis.call(obj); // 'Custom' as this in the function is set to obj
whatsThis.apply(obj); // 'Custom' as this in the function is set to obj
