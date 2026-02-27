function dudeneyNumber(x) {
    let cbrt = Math.cbrt(x);
    let sum = 0;
    while (x > 0) {
        let d = x % 10;
        sum += d;
        x = Math.floor(x / 10);
    }

    if (sum == cbrt) {
        return 'Dudeney';
    } else {
        return 'NOT Dudeney';
    }
}

let x = 512;
console.log(`${x} is ${dudeneyNumber(x)}`);