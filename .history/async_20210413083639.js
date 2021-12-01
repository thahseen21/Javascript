threeSec = () => {
  setTimeout(() => {
    console.log("Hi im after three seconsds");
  }, 3000);
};

printAll = () => {
  threeSec();
};

printAll();
