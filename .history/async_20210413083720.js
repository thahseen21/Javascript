threeSec = () => {
  setTimeout(() => {
    console.log("Hi im after three seconsds");
  }, 3000);
};

oneSec = () => {
  setTimeout(() => {
    console.log("Hi im after three seconsds");
  }, 1000);
};

printAll = () => {
  threeSec();
  oneSec();
};

printAll();
