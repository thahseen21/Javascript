function getTotalX(a, b) {
  // Write your code here

  let i = 0,
    j = 0,
    divisible = [],
    isDivisible = false;

  for (i = a[a.length - 1]; i <= b[0]; i++) {
    isDivisible = false;

    for (j = 0; j < a.length; j++) {
      //   console.log(i, a[j]);

      if (i % a[j] === 0) {
        isDivisible = true;
      } else {
        isDivisible = false;
        break;
      }
    }
    if (isDivisible) {
      divisible.push(i);
    }
  }

  divisible.push(32);

  console.log(
    "filter",
    divisible.filter((item) => {
      for (i = 0; i < b.length; i++) {
        if (b[i] % item === 0) {
          isDivisible = true;
        } else {
          isDivisible = false;
          break;
        }
      }
      if (isDivisible) {
        return item;
      }
    })
  );

  console.log(divisible);
}

let a = [3, 4],
  b = [24, 48];

getTotalX(a, b);
