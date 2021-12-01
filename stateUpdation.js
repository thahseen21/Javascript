let a_table = "tableA",
  a_orderPlace = "pool",
  a_id = "dishA";
let b_table = "tableB",
  b_orderPlace = "pool",
  b_id = "dishB";

let orders = {};
// orders = { pool: { 21: { count: 1 } } };

let updatedOrders = {};

updatedOrders = {
  [a_orderPlace]: {
    ...orders[a_orderPlace],
    [a_table]: {
      // ...orders[a_orderPlace][a_table],
      [a_id]: 1,
    },
  },
};

orders = {
  ...orders,
  ...updatedOrders,
};

console.log("orders", orders);
console.log("updatedOrders", updatedOrders);
updatedOrders = {
  [b_orderPlace]: {
    ...orders[b_orderPlace],
    [b_table]: {
      [b_id]: 1,
    },
  },
};

orders = {
  ...orders,
  ...updatedOrders,
};
console.log("orders", orders);
console.log("updatedOrders", updatedOrders);

updatedOrders = {
  [b_orderPlace]: {
    ...orders[b_orderPlace],
    [b_table]: {
      // ...orders[b_orderPlace][b_table],
      ...orders[b_table],
      dishC: 1,
    },
  },
};

orders = {
  ...orders,
  ...updatedOrders,
};

console.log("updatedOrders", updatedOrders);
console.log("orders", orders);
console.log("table []", orders[a_table]);
