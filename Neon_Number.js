function NeonNumber(x) {
    const temp = x;
    let sq = x * x;
    let sum = 0;
    while (sq > 0) {
        let d = sq % 10;
        sum += d;
        sq = Math.floor(sq / 10);
    }
    if (sum == temp) {
        return 'Neon';
    } else {
        return 'NOT Neon';
    }
}

let x = 9;
console.log(`${x} is ${NeonNumber(x)}`);