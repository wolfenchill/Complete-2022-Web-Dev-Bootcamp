var x = 99;

// function beersOnTheWall() {
while (x > 0) {
    console.log(
        x +
        " bottles of beers on the wall, " +
        x +
        " number of beers. Take one down, pass it around, " +
        (x - 1) +
        " beers on the wall"
    );
    x--;
}
// }

// console.log(beersOnTheWall());

// var numberOfBottles = 99;
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
//     numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }