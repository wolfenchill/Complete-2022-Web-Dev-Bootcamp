const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let randomNumber;

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

    let colorSound = new Audio(`sounds/${randomChosenColour}.mp3`);
    colorSound.play();
}

$(".btn").click(function(event) {
    const userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    $(`.${userChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    let chosenColorSound = new Audio(`sounds/${userChosenColor}.mp3`);
    chosenColorSound.play();
});