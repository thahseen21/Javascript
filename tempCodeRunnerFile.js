
console.log(fibonacci(40));

function fibonacci(n, from = "starting") {
    // console.log(n);
    if (n == 1 || n == 2) {
        console.log(n, 1, from);
        return 1;
    } else {
        result = fibonacci(n - 1, "left") + fibonacci(n - 2, "right");
        console.log(n, result, from);
        return result;
    }
}