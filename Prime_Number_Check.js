function primeNumberCheck(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return 'Composite';
        }
    }
    return 'Prime';
}

console.log(primeNumberCheck(2));