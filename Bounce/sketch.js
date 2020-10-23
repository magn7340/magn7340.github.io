let cx = 0;
let hastighed = 4;
let diameter = 50;
let cz = 0;
let cy = 600;
let cb = 600;


function setup() {
    createCanvas(600, 600);
    createButton("Op");
}

function draw() {
    background(220);
    circle(cx, 300, diameter);
    // circle(300, cz, diameter);
    // circle(cy, 300, diameter);
    // circle(300, cb, diameter);

    if (cx > width - diameter / 2) {
        position = -hastighed
    }
    if (cx < 0 + diameter / 2) {
        position = hastighed
    }
    cx = cx + position

    // eller også det her, virker ikke helt
    // if (cx < 0 + diameter / 2 || cx > width - diameter / 2) {
    //     hastighed = -hastighed;
    // }










    // if (cz > height + diameter / 2) {
    //     hastighed = -2
    // }
    // if (cz < 0 - diameter / 2) {
    //     hastighed = 2
    // }
    // cz = cz + hastighed




    // if (cy > width - diameter / 2) {
    //     hastighed = -2
    // }
    // if (cy < 0 + diameter / 2) {
    //     hastighed = 2
    // }
    // cy = cy + hastighed



    // if (cb > height + diameter / 2) {
    //     hastighed = -2
    // }
    // if (cb < 0 - diameter / 2) {
    //     hastighed = 2
    // }
    // cb = cb + hastighed
}