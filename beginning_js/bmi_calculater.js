function calculateBMI(weight, height) {

    var calc = weight / ((height) ** 2);
    var interpretation = "";

    if (calc < 18.5) {
        interpretation = "Your BMI is " + calc + ", so you are underweight";
    } else if (calc <= 24.9) {
        interpretation = "Your BMI is " + calc + ", so you have a normal weight";
    } else {
        interpretation = "Your BMI is " + calc + ", so you are underweight";
    }

    return interpretation;

}

console.log(calculateBMI(65, 1.8));

// var bmi = calculateBMI(65, 1.8);

// // console.log(bmi);

// function aFunction() {
//     var a = 12;
//     var b = 7;
//     return a - b;
// }

// console.log(aFunction())