function fibonacci(l) {
    let m = 0;
    let n = 1;
    console.log(m);
    for (let i = 0; i <= l; i++) {
        let z = m + n;
        console.log(z);
        m = n;
        n = z;
    }
}

fibonacci(12);