function getTotalX(a, b) {
  // Write your code here

  let i = 0,
    j = 0,
    divisible = [],
    isDivisible = false;

  for (i = a[a.length - 1]; i <= b[0]; i++) {
    isDivisible = false;
    for (j = 0; j < a.length; j++) {
      if (i % a[j] === 0) {
        isDivisible = true;
      } else {
        isDivisible = false;
        return;
      }
    }
  }
}
