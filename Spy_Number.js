function spyNumber(x) {
    let sum = 0;
    let product = 1;
    while (x > 0) {
        let d = x % 10;
        sum += d;
        product *= d;
        x = Math.floor(x / 10);
    }

    if (sum == product) {
        return 'Spy';
    } else {
        return 'NOT Spy';
    }
}

let x = 1124;
console.log(`${x} is ${spyNumber(x)}`);