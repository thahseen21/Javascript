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

data.reduce((acc, item) => {
  console.log(item);
});
