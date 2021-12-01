display = (name) => {
  console.log("name :", name);
};

function* generator() {
  yield display("thahseen");
  yield display("mohammed");
}

let obj = generator().next();
console.log(obj);
