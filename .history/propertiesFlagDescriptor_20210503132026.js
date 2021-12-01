// let user = {
//   name: "John",
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// console.log(JSON.stringify(descriptor, null, 2));

let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  writable,
  //   enumerable: true,
  //   configurable: true,
});

console.log(user.name); // John
console.log(Object.getOwnPropertyDescriptor(user, "name"));
user.name = "Pete"; // Error
