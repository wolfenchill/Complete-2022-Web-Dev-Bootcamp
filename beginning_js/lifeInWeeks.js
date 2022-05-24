function lifeInWeeks(age) {

    var weeksLived = 52 * age;
    var monthsLived = 12 * age;
    var daysLived = 365 * age;

    // console.log("You have " + ((90 * 365) - daysLived) + " days, " + ((90 * 52) - weeksLived) + " weeks, and " + ((90 * 12) - monthsLived) + " months left");
    console.log("You have " + ((90 * 365) - daysLived) + " days, " + ((90 * 52) - weeksLived) + " weeks, and " + ((90 * 12) - monthsLived) + " months left");
    // console.log("You have " + ((90 * 365) - daysLived))
    // console.log("You have " + ((90 * 365) - daysLived) + " days, " + ((90 * 52) - weeksLived));

}


lifeInWeeks(32);