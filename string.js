let s = "talentcloudturing";
let k = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0, 1, 2, 3, 4, 5];

let result = [];

let string = s.split("");

for (let i = 0; i < k.length; i++) {
    result[k[i]] = string[i];
}

console.log(result);
