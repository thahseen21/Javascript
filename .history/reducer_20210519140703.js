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
    tables:{
        1:
    }
  },
  {
    id: 2,
    hotel_id: 2,
    customer_id: 1,
    amenity_id: 2,
    place: 3,
    is_paid: 0,
    order_id: 1,
    dish_id: 28,
    count: 3,
    addon: null,
    order_count: 1,
    note: null,
  },
  {
    id: 3,
    hotel_id: 2,
    customer_id: 1,
    amenity_id: 2,
    place: 3,
    is_paid: 0,
    order_id: 1,
    dish_id: 35,
    count: 1,
    addon: 1,
    order_count: 2,
    note: null,
  },
  {
    id: 4,
    hotel_id: 2,
    customer_id: 1,
    amenity_id: 2,
    place: 3,
    is_paid: 0,
    order_id: 1,
    dish_id: 35,
    count: 1,
    addon: 2,
    order_count: 2,
    note: null,
  },
  {
    id: 5,
    hotel_id: 2,
    customer_id: 1,
    amenity_id: 2,
    place: 3,
    is_paid: 0,
    order_id: 1,
    dish_id: 35,
    count: 4,
    addon: 1,
    order_count: 2,
    note: null,
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
    ...acc,
    [item.amenity_id]: {
      ...acc?.[item.amenity_id],
      [item.place]: [
        // ...acc?.[item.amenity_id]?.[item.place],
        { [item.dish_id]: item.count },
      ],
    },
  };

  //   acc[item.amenity_id] = { [item.place]: [{ [item.dish_id]: item.count }] };
  return structedData;
}, {});

console.log("modded", modifidedData, modifidedData[2]);

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
