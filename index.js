let drumButtons = document.querySelectorAll(".drum");

function playSound(key){
  let audio;
  switch (key){
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    default:
      console.log(key);
      return;
  }
  audio.play();
};

function animateButton(key) {
    var button = document.querySelector("." + key);
    if (button) {
        button.classList.add("pressed");
        setTimeout(function(){
            button.classList.remove("pressed");
        }, 100);
    }
}

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function(){
        var buttonKey = this.innerHTML.toLowerCase();
        playSound(buttonKey);
        animateButton(buttonKey);
    });
};

document.addEventListener("keydown", function(event){
    playSound(event.key.toLowerCase());
    animateButton(event.key.toLowerCase());
});