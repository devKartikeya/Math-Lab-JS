const arr = [[2, 4, 6], [4, 6, 8], [6, 8, 10], [8, 10, 12]];
const summedArr = [];

for (const elem of arr) {
    let sum = 0;
    for (const innerElem of elem) sum += innerElem;
    summedArr.push(sum);
}

console.log(summedArr);