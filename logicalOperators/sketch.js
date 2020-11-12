function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    circle(mouseX, mouseY, 50);
    // Felt øverst til venstre
    if (mouseX <= width / 2 || mouseY <= height / 2) {
        fill(255, 255, 255)
    }
    // Felt øverst til højre
    if (mouseX >= width / 2 && mouseY <= height / 2) {
        fill(255, 0, 0)
    }
    // Felt nederst til venstre
    if (!!mouseX <= width / 2 && mouseY >= height / 2) {
        fill(255, 255, 255)
    }
    // Felt nederst til højre
    if (!mouseX >= width / 2 || mouseY >= height / 2) {
        fill(255, 0, 0)
    }

}