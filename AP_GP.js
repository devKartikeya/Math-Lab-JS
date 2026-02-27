function arithmeticProgression(a, d, n) {
    for (let i = 0; i < n; i++) {
        console.log(a);
        a = a + d;
    }
}

arithmeticProgression(8, 4, 12);

function geometricProgression(a, d, n) {
    for (let i = 0; i < n; i++) {
        console.log(a);
        a = a * d;
    }
}

geometricProgression(2, 2, 6);