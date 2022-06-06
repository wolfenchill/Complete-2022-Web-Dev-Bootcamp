function fibonacciGenerator(items) {
    var output = [];
    if (items === 1) {
        output.push(0);
    }

    if (items === 2) {
        output.push(0, 1);
    }

    if (items > 2) {
        output = [0, 1];
        for (var i = 3; i <= items; i++) {
            lastNumber = output[i - 2] + output[i - 3];
            output.push(lastNumber);
        }
    }
    return output;
}

console.log(fibonacciGenerator(2));