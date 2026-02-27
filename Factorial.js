function factorial(x) {
    let facti = 1;
    for (let i = x; i > 0; i--) {
        facti *= i;
    }
    return facti;
}

console.log(factorial(6));