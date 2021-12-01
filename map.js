let dish = [
  {
    id: 1,
    cat_id: 1,
    dish_name: "Mayonnaise",
    price: 30,
  },
  {
    id: 2,
    cat_id: 1,
    dish_name: "Tender Coconut Pudding",
    price: 15,
  },
  {
    id: 3,
    cat_id: 1,
    dish_name: "Arabian Grape Juice 1 Ltr",
    price: 180,
  },
  {
    id: 4,
    cat_id: 2,
    dish_name: "Shawarma Roll",
    price: 120,
  },
  {
    id: 5,
    cat_id: 2,
    dish_name: "Spl Shawarma Roll",
    price: 160,
  },
  {
    id: 6,
    cat_id: 2,
    dish_name: "Mexican Shawarma Roll",
    price: 130,
  },
  {
    id: 7,
    cat_id: 2,
    dish_name: "Mexican Shawarma Plate",
    price: 140,
  },
  {
    id: 8,
    cat_id: 2,
    dish_name: "Italian Shawarma",
    price: 160,
  },
  {
    id: 9,
    cat_id: 2,
    dish_name: "Chicken Tikka Roll",
    price: 150,
  },
  {
    id: 10,
    cat_id: 2,
    dish_name: "Chicken Seekh Roll",
    price: 170,
  },
  {
    id: 11,
    cat_id: 2,
    dish_name: "Shawarma Plate",
    price: 170,
  },
  {
    id: 12,
    cat_id: 3,
    dish_name: "Afghani BBQ Chicken",
    price: 260,
  },
  {
    id: 13,
    cat_id: 3,
    dish_name: "Malay BBQ Chicken",
    price: 150,
  },
  {
    id: 14,
    cat_id: 3,
    dish_name: "Alfaham Dajaj",
    price: 150,
  },
  {
    id: 15,
    cat_id: 3,
    dish_name: "Pepper BBQ",
    price: 150,
  },
  {
    id: 16,
    cat_id: 3,
    dish_name: "Grill Chicken",
    price: 150,
  },
  {
    id: 17,
    cat_id: 3,
    dish_name: "BBQ Chicken",
    price: 150,
  },
  {
    id: 18,
    cat_id: 3,
    dish_name: "BBQ Fish",
    price: 290,
  },
  {
    id: 19,
    cat_id: 4,
    dish_name: "Tandoori Chicken",
    price: 230,
  },
  {
    id: 20,
    cat_id: 4,
    dish_name: "Chicken Seekh",
    price: 230,
  },
  {
    id: 21,
    cat_id: 4,
    dish_name: "Chicken Tikka",
    price: 230,
  },
  {
    id: 22,
    cat_id: 4,
    dish_name: "Malay Chicken Tikka",
    price: 230,
  },
  {
    id: 23,
    cat_id: 4,
    dish_name: "Hariyali Chicken Tikka",
    price: 230,
  },
  {
    id: 24,
    cat_id: 4,
    dish_name: "Kali Mirch Tikka",
    price: 230,
  },
  {
    id: 25,
    cat_id: 4,
    dish_name: "Achari Chicken Tikka",
    price: 230,
  },
  {
    id: 26,
    cat_id: 4,
    dish_name: "Chicken Tangdi Kebab",
    price: 230,
  },
  {
    id: 27,
    cat_id: 4,
    dish_name: "Chicken Reshmi Kebab",
    price: 230,
  },
  {
    id: 28,
    cat_id: 4,
    dish_name: "Chicken Kalmi Kebab",
    price: 230,
  },
  {
    id: 29,
    cat_id: 5,
    dish_name: "Paneer Tikka",
    price: 200,
  },
  {
    id: 30,
    cat_id: 6,
    dish_name: "Chicken Biriyani",
    price: 15,
  },
  {
    id: 31,
    cat_id: 6,
    dish_name: "Special Chicken Biriyani",
    price: 130,
  },
  {
    id: 32,
    cat_id: 6,
    dish_name: "Mutton Biriyani",
    price: 330,
  },
  {
    id: 33,
    cat_id: 6,
    dish_name: "Egg Biriyani",
    price: 180,
  },
  {
    id: 34,
    cat_id: 6,
    dish_name: "Chicken Tikka Biriyani",
    price: 130,
  },
  {
    id: 35,
    cat_id: 6,
    dish_name: "Fish Biriyani",
    price: 120,
  },
];

let cat = [
  {
    id: 1,
    cat_name: "juice",
  },
  {
    id: 2,
    cat_name: "Rolls",
  },
  {
    id: 3,
    cat_name: "Arabian",
  },
  {
    id: 4,
    cat_name: "Tandoor kebab",
  },
  {
    id: 5,
    cat_name: "Veg",
  },
  {
    id: 6,
    cat_name: "Biriyani",
  },
  {
    id: 7,
    cat_name: "Rice & Noodles",
  },
  {
    id: 8,
    cat_name: "Roties/ Breads",
  },
  {
    id: 9,
    cat_name: "Soups",
  },
  {
    id: 10,
    cat_name: "Gravies(veg)",
  },
  {
    id: 11,
    cat_name: "Gravies(Non Veg)",
  },
  {
    id: 12,
    cat_name: "Dry Items",
  },
  {
    id: 13,
    cat_name: "Ya Kebab Special",
  },
  {
    id: 14,
    cat_name: "Mocktails",
  },
];

cat.map((cat) => {
  dish.map((dish) => {
    if (cat.id === dish.cat_id) {
      console.log(
        `cat id ${cat.cat_name} dish name : ${dish.dish_name} ,price ${dish.price}`
      );
    }
  });
});
