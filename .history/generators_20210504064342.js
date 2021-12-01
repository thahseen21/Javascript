display = (name) => {
  console.log("name :", name);
  return name;
};

function* generator() {
  yield* display("thahseen");
  yield* display("mohammed");
  return "potato";
}

let obj = generator().next();
console.log(obj);

let obj2 = generator().next();
console.log(obj2);
