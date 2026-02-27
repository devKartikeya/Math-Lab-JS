function armstrong_Number(x) {
    let temp = x;
    const stored = temp;
    let count = 0;
    let sum = 0;
    while (x > 0) {
        let d = x % 10;
        count++;
        x = Math.floor(x / 10);
    }
    while (temp > 0) {
        let d = temp % 10;
        sum += Math.pow(d, count);
        temp = Math.floor(temp / 10);
    }
    if (sum == stored) {
        return 'Armstrong';
    } else {
        return 'NOT Armstrong';
    }
}

let x = 153;
console.log(`${x} is ${armstrong_Number(x)}`);