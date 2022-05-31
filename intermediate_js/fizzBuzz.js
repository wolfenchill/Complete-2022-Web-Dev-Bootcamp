var output = [];
var x = 1;

function fizzBuzz() {
    if (x % 3 === 0 && x % 5 === 0) {
        output.push("fizzBuzz");
    } else if (x % 3 === 0) {
        output.push("fizz");
    } else if (x % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(x);
    }

    console.log(output);
    x++;
}

fizzBuzz();