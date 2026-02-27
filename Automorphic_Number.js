function automorphicNumber(x) {
    const temp = x;
    let sq = x * x;
    let count = 0;
    while (x > 0) {
        let d = x % 10;
        count++;
        x = Math.floor(x / 10);
    }

    if (temp == Number(String(sq).slice(-count))) {
        return 'Automorphic';
    } else {
        return 'NOT Automorphic';
    }
}

let x = 25;
console.log(`${x} is ${automorphicNumber(x)}`);