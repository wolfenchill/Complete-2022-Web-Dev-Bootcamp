var guestList = ["Daniel", "Jess", "Theo"];

var res = prompt("What is your name?");

if (guestList.includes(res) === true) {
    alert("Welcome!");
} else {
    alert("Sorry, not cool enough..");
}