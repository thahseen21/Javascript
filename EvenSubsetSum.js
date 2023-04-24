let k = [1, 4, 2];
// let k = [1, 4, 2, 5, 3, 6, 7, 8, 9, 10, 11, 12];

let evenNumbers = getEvenNumbers(k.length);

let ans = 0;

evenNumbers.map((subsetLimit) => {
    for (let i = 0; i < k.length - subsetLimit + 1; i++) {
        console.log(i, subsetLimit, k.slice(i, subsetLimit + i));

        let subans = 0;
        k.slice(i, subsetLimit + i).map((x) => (subans += x));
        ans += subans;
    }
});

let totalSum = 0;
k.map((x) => (totalSum += x));

console.log(ans + totalSum);

function getEvenNumbers(size) {
    let evenNumber = [];
    for (let i = 1; i < size; i++) {
        if (i % 2 == 0) {
            evenNumber.push(i);
        }
    }
    console.log(evenNumber);
    return evenNumber;
}
