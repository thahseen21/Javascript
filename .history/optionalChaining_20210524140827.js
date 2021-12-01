let order = {
  1: [{ dishId: 21, count: 1 }],
};

let updateOrder,
  table = 1,
  dishId = 26;

updateOrder = {
  ...order,
  [table]: [...order?.[table], { dishId: dishId, count: 1 }],
};

console.log(order);
