var one = document.getElementById("one");
var two = document.getElementById("two");
var to = document.getElementById("to");

const music = new Audio('song.mp3');
const firework = new Audio('firework.mp3');

function start() {
    one.classList.add("to");
    one.classList.add("one");
    two.classList.add("to");
    two.classList.add("two");
    to.classList.add("to");
    
    document.querySelector(".cts").style.display = "none";
    document.querySelector(".black").classList.add("blackanim");

    setTimeout(function(){
        music.play();
        firework.play();
    }, 12000)

}