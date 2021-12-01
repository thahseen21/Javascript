//

function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printString("A");
  printString("B");
  printString("C");
}

printAll();

// using callback to fix above
console.log('Using callback now.....')
function printString(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}

printAll();
