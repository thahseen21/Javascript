display = (name) => {
  console.log("name :", name);
  return name;
};

function* generator() {
  yield display("thahseen");
  yield display("mohammed");
}

let obj = generator().next();
console.log(obj);

obj = generator().next();
console.log(obj);
