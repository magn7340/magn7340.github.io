function setup() {
    createCanvas(400, 400);
    // Udskriver 2-10 tabellerne

    // let x = 2
    // let y = 1
    // let z = 0
    // do {
    //     if (y <= 10) {
    //         z = x * y
    //         y++
    //         alert(z)
    //     } else {
    //         x++
    //         y = 1
    //     }
    // } while (x <= 10)


    // Brug af flere løkker
    for (let i = 2; i <= 10; i++) {
        console.log('tabel: ${i}')
        for (let j = 1; j <= 10; j++) {
            let r = i * j
            console.log(r)
        }
    }
}

function draw() {
    background(220);
}