let k = [4, 1, 8, 9];

console.log(
    k.filter((val, i) => {
        if (i != 1) return val;
    })
);
// let k = [1, 4, 6, 2];

// let result = [];

let finalResult = [];

const take = (list, result, iteration) => {
    result.push(list[iteration]);
    // console.log("take result", result, iteration);
    subset(list, result, ++iteration);
};

const leave = (list, result, iteration) => {
    // result = result.slice(0, iteration);
    let potato = result.filter((val, i) => {
        if (i != iteration) return val;
    });
    // console.log("leave", "result", result, "filtered", potato, iteration);
    subset(list, potato, ++iteration);
};

const subset = (list, result, iteration = 0) => {
    if (iteration === list.length) {
        finalResult.push([...result]);
        result = [];
        // console.log("existing subset", result, "------------", finalResult);
        return finalResult;
    }
    if (list.length > 0) {
        take(list, result, iteration);
        result.pop();
        leave(list, result, iteration);
    }
    if (list.length === 0) {
        return { result, list };
    }
};
subset(k, []);
console.log("final potato ", finalResult, finalResult.length);
