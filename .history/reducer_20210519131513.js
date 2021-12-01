let data = [
  {
    id: 1,
    hotel_id: 2,
    customer_id: 1,
    amenity_id: 2,
    place: 3,
    is_paid: 0,
    order_id: 1,
    dish_id: 5,
    count: 2,
    addon: null,
    order_count: 1,
    note: "less mayonise",
  },
];

let modifidedData = data.reduce((acc, item) => {
  delete item["hotel_id"];
  delete item["customer_id"];
  delete item["is_paid"];
  delete item["order_id"];

  let structedData;

  console.log(acc, item);

  structedData = {
    [item.amenity_id]: {
      [item.place]: [{ [item.dish_id]: item.count }],
    },
  };

  acc[item.amenity_id] = { [item.place]: [{ [item.dish_id]: item.count }] };
}, {});

console.log("modded", modifidedData);

// {
//     confirmOrder: {
//       '2': {
//         '1': [
//           {'1': {count: 1}},
//           {'2': {count: 1},
//             '3': {count: 1}
//           }
//         ]
//       }
//     }
//   }
