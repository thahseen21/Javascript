const start = new Date();

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

// let memo = [];

// const memoizedFibonacci = (n, memo = []) => {
//     // console.log("root", n, memo);
//     let result;

//     if (memo[n] != null) {
//         return memo[n];
//     }

//     if (n == 1 || n == 2) {
//         result = 1;
//         memo[n] = result;
//         return result;
//     } else {
//         result = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
//         memo[n] = result;
//         return result;
//     }
// };

// console.log(memoizedFibonacci(10));

// const bottomUpApproach = (n) => {
//     if (n == 1 || n == 2) return 1;

//     bottomUp = new Array(n);

//     bottomUp[1] = 1;
//     bottomUp[2] = 1;

//     // console.log(bottomUp);
//     for (let i = 3; i <= n; i++) {
//         bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
//         console.log(bottomUp);
//     }

//     return bottomUp[n];
// };

// console.log(bottomUpApproach(10));

// const end = new Date();
// // console.log("Execution Time:", end - start, start, end);
