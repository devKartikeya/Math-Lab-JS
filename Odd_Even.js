function checkOddEven(x) {
    if (x % 2 === 0) {
        return "even";
    } else if (x % 2 === 1) {
        return "odd";
    }
}

let x = 5;

console.log(`${x} is ${checkOddEven(5)}`);