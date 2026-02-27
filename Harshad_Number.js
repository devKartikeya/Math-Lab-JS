function spyNumber(x) {
    const temp = x;
    let sum = 0;
    while (x > 0) {
        let d = x % 10;
        sum += d;
        x = Math.floor(x / 10);
    }

    if (temp % sum == 0) {
        return 'Harshad';
    } else {
        return 'NOT Harshad';
    }
}

let x = 42;
console.log(`${x} is ${spyNumber(x)}`);