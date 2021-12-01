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
  // return new Promise((resolve, reject) => callback(() => {
  //   resolve('common')
  // }));
  // return new Promise((resolve, reject) => callback(print));
  return callback(print);
};

const printCallBack = () => {
  return new Promise(resolve => {
    resolve('check me gere')
    console.log("im printing after two seconds");
  })
};

promiseCallBack(printCallBack).then((response) =>
  console.log("response", response)
);
