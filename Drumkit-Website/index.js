
let crash = new Audio('sounds/crash.mp3');



for (let i=0; i<document.querySelectorAll('.drum').length; i++) {
    


document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    crash.play();
})

};