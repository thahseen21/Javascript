let k = [4, 1, 8];

let finalResult = [];

const take = (list, result, iteration) => {
    result.push(list[iteration]);
    subset(list, result, ++iteration);
};

const leave = (list, result, iteration) => {
    let potato = result.filter((val, i) => {
        if (i != iteration) return val;
    });
    subset(list, potato, ++iteration);
};

const subset = (list, result, iteration = 0) => {
    if (iteration === list.length) {
        finalResult.push([...result]);
        result = [];
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
let result = subset(k, []);
console.log("result ", finalResult, finalResult.length);
