function setup() {
    createCanvas(400, 400);

    //Brug af while løkke
    let x = 10
    while (x > 0) {
        alert(x)
        x--;
    }

    //Brug af for løkke
    for (let x = 10; x > 0; x--) {
        alert(x);
    }

}

function draw() {
    background(220);
}