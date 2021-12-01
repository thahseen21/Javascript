threeSec = () => {
  setTimeout(() => {
    console.log("Hi im after three seconds");
  }, 3000);
};

oneSec = () => {
  setTimeout(() => {
    console.log("Hi im after one seconds");
  }, 1000);
};

printAll = () => {
  threeSec();
  oneSec();
};

printAll();
