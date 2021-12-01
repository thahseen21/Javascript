const callback = (print) => {
  setTimeout(() => {
    print();
  }, 2000);
};

// const printCallBack = () => {
//   console.log("im printing after two seconds");
// };

// callback(printCallBack);

// using promise
const promiseCallBack = (print) => {
  return new Promise((resolve, reject) => resolve(callback(print)));
};

const printCallBack = () => {
  console.log("im printing after two seconds");
};

promiseCallBack(printCallBack).then((response) =>
  console.log("response", response)
);
