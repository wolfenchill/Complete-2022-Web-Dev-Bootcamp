function isLeapYear(currentYear) {

    var answer = ''

    if (currentYear % 4 === 0 && currentYear % 100 !== 0) {
        answer = "It is a leap year";
    } else if (currentYear % 100 === 0 && currentYear % 400 === 0) {
        answer = "It is a leap year";
    } else {
        answer = "It is not a leap year";
    }

    return answer;
}

console.log(isLeapYear(2100));