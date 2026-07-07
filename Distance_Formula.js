let p1 = [10, 20];
let p2 = [5, 15];

function distance_formula(p1, p2) {
    let distance = Math.floor(Math.sqrt(((p2[0] - p1[0])**2) + ((p2[1] - p1[1])**2)));
    console.log(distance);
};

distance_formula(p1, p2);