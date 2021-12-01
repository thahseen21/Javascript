// let order = {
//   1: [{ dishId: 21, count: 1 }],
// };

let updateOrder,
  order = {},
  table = 1,
  dishId = 26;

updateOrder = {
  ...order,
  [table]: [
    ...(order?.[table] && order?.[table]),
    { dishId: dishId, count: 1 },
  ],
};

// order = { ...order, ...updateOrder };

console.log(order?.[table] ? "hi" : "no");

console.log(order);
