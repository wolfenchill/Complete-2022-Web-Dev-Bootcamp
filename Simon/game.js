const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
let userClickedPattern = [];
let randomNumber;

function nextSequence() {
    $("#level-title").text(`Level ${gamePattern.length + 1}`);
    userClickedPattern.length = 0;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    // $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    $("." + randomChosenColour)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    let colorSound = new Audio(`sounds/${randomChosenColour}.mp3`);
    colorSound.play();
}

$(".btn").click(function(event) {
    const userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    // $(`.${userChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    let chosenColorSound = new Audio(`sounds/${userChosenColor}.mp3`);
    chosenColorSound.play();
    $(`.${userChosenColor}`).addClass("pressed");
    setTimeout(() => {
        $(`.${userChosenColor}`).removeClass("pressed");
    }, 100);

    // console.log("does " + gamePattern + " equal " + userClickedPattern + "?");
});

$(document).one("keypress", () => {
    nextSequence();
});

let loseGame = new Audio("sounds/wrong.mp3");

$(".btn").click(() => {
    console.log("is this working");
    if (userClickedPattern.length < gamePattern.length) {
        if (
            gamePattern[userClickedPattern.length - 1] ==
            userClickedPattern[userClickedPattern.length - 1]
        ) {
            console.log("matched so far");
        } else {
            console.log("test1");
            gameOver();
        }
    } else {
        if (
            gamePattern.length == userClickedPattern.length &&
            gamePattern.every(function(element, index) {
                return element === userClickedPattern[index];
            })
        ) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        } else {
            gameOver();
        }
    }
});

function gameOver() {
    $("body").addClass("game-over");
    loseGame.play();
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    $("#level-title").text("Game Over Bisch. Press any key to restart!! (Bisch)");
    $(document).one("keypress", () => {
        nextSequence();
    });
}