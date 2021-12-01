let apples = [-2, 2, 1];

apples = apples.map((apple) => 5 + apple);

console.log(apples);

apples.filter((apple) => {
  console.log(apple >= 7);
  if (apple >= 7) {
    return apple;
  }
});

console.log(apples);
