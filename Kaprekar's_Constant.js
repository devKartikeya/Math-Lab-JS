const prompt = require("prompt-sync")();

let num = prompt("Enter a 4-digit number: ");

if (num.length !== 4) {
    console.log("Please enter exactly a 4-digit number.");
    return;
}

if (new Set(num).size === 1) {
    console.log("All digits are the same. Kaprekar process cannot be applied.");
    return;
}

let steps = 0;

while (num !== "6174") {

    let asc = num.split("").sort().join("");
    let desc = num.split("").sort((a, b) => b - a).join("");

    let result = parseInt(desc) - parseInt(asc);

    num = result.toString().padStart(4, "0");

    console.log(`${desc} - ${asc} = ${num}`);

    steps++;
}

console.log(`\nReached Kaprekar's Constant (6174) in ${steps} step(s).`);
