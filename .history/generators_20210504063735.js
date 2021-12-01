display = (name) => {
  console.log("name :", name);
};

function* generator() {
  yield display("thahseen");
  yield display("mohammed");
}

generator().next();
